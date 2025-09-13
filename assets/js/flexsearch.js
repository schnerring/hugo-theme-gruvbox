import { Document } from "flexsearch";

const search = document.getElementById("search__text");
const suggestions = document.getElementById("search__suggestions");

if (search !== null) {
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "/") {
      // Focus search bar with CTRL + /
      e.preventDefault();
      search.focus();
    } else if (e.key === "Escape") {
      // Unfocus search bar with ESC
      search.blur();
      suggestions.classList.add("search__suggestions--hidden");
    }
  });
}

document.addEventListener("click", (e) => {
  const clickInsideSuggestions = suggestions.contains(e.target);
  if (!clickInsideSuggestions) {
    // Hide search suggestions if clicking elsewhere
    suggestions.classList.add("search__suggestions--hidden");
  }
});

/*! Source: https://dev.to/shubhamprakash/trap-focus-using-javascript-6a3 */
document.addEventListener("keydown", (e) => {
  const suggestionsHidden = suggestions.classList.contains(
    "search__suggestions--hidden",
  );
  if (suggestionsHidden) return;

  const focusableSuggestions = [...suggestions.querySelectorAll("a")];
  if (focusableSuggestions.length === 0) return;

  const currentIndex = focusableSuggestions.indexOf(document.activeElement);

  if (e.key === "ArrowDown") {
    // Focus next suggestion
    e.preventDefault();
    const nextIndex =
      currentIndex + 1 < focusableSuggestions.length
        ? currentIndex + 1
        : currentIndex;
    focusableSuggestions[nextIndex].focus();
  } else if (e.key === "ArrowUp") {
    // Focus previous suggestion
    e.preventDefault();
    const nextIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    focusableSuggestions[nextIndex].focus();
  }
});

/*! The FlexSearch implementation is inspired by the Doks theme | MIT license | https://github.com/thuliteio/doks-core/blob/eb9f50cee0eeae5d72f3751951f30cf914144bc0/assets/js/flexsearch.js */
(async function () {
  const index = Document({
    tokenize: "forward",
    document: {
      id: "id",
      index: [
        { field: "title" },
        { field: "tags" },
        { field: "content" },
        {
          field: "date",
          tokenize: "strict",
          encode: false,
        },
      ],
      store: ["title", "summary", "date", "permalink"],
    },
  });

  // build index
  const response = await fetch("/search-index.json");
  const data = await response.json();
  for (const item of data) {
    await index.addAsync(item);
  }

  search.addEventListener("input", async function () {
    // Run search
    const maxResultsCount = {{ $.Site.Params.flexsearch.maxResultsCount | default 5 }};
    const searchText = this.value;
    const searchResults = await index.searchAsync({
      query: searchText,
      limit: maxResultsCount,
      enrich: true,
    });

    const searchResultsMap = new Map();

    // Deduplicate search results by permalink
    for (const searchResult of searchResults.flatMap((r) => r.result)) {
      if (searchResultsMap.has(searchResult.permalink)) continue;
      searchResultsMap.set(searchResult.doc.permalink, searchResult.doc);
    }

    // Display results
    suggestions.innerHTML = "";
    suggestions.classList.remove("search__suggestions--hidden");

    if (searchResultsMap.size === 0 && searchText) {
      const noResultsMessage = document.createElement("div");
      noResultsMessage.innerHTML = `No results for "<strong>${searchText}</strong>"`;
      noResultsMessage.classList.add("search__no-results");
      suggestions.appendChild(noResultsMessage);
      return;
    }

    for (const [permalink, searchResult] of searchResultsMap) {
      const suggestion = document.createElement("a");
      suggestion.href = permalink;
      suggestion.classList.add("search__suggestion-item");
      suggestions.appendChild(suggestion);

      const title = document.createElement("div");
      title.textContent = searchResult.title;
      title.classList.add("search__suggestion-title");
      suggestion.appendChild(title);

      const summary = document.createElement("div");
      summary.innerHTML = searchResult.summary;
      summary.classList.add("search__suggestion-summary");
      suggestion.appendChild(summary);

      if (suggestions.childElementCount === maxResultsCount) break;
    }
  });

  search.style.visibility = "visible";
})();
