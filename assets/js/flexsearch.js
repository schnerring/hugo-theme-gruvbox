//! Source: https://github.com/h-enk/doks/blob/master/assets/js/index.js

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
    "search__suggestions--hidden"
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
    const nextIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
    focusableSuggestions[nextIndex].focus();
  }
});

(function () {
  const index = new Document({
    tokenize: "forward",
    cache: 100,
    document: {
      id: "id",
      store: ["href", "title", "description"],
      index: ["title", "description", "content"],
    },
  });

  //! Source: https://discourse.gohugo.io/t/range-length-or-last-element/3803/2
  {{ $list := (where .Site.RegularPages "Type" "in" .Site.Params.mainSections) }}
  {{ $len := (len $list) }}

  index.add(
    {{ range $index, $element := $list }}
      {
        id: {{ $index }},
        href: "{{ .RelPermalink }}",
        title: {{ .Title | jsonify }},
        {{ with .Description }}
          description: {{ . | jsonify }},
        {{ else }}
          description: {{ .Summary | plainify | jsonify }},
        {{ end }}
        content: {{ .Content | jsonify }}
      })
      {{ if ne (add $index 1) $len }}
        .add(
      {{ end }}
    {{ end }}
  ;

  search.addEventListener("input", function () {
    const searchText = this.value;
    var searchResults = index.search(searchText, { limit: 5, enrich: true });

    const flatResults = {};
    for (const searchResult of searchResults.flatMap((r) => r.result)) {
      flatResults[searchResult.doc.href] = searchResult.doc;
    }

    suggestions.classList.remove("search__suggestions--hidden");
    suggestions.innerHTML = "";

    for (const href in flatResults) {
      const suggestion = document.createElement("a");
      suggestion.href = href;
      suggestion.classList.add("search__suggestion-item");
      suggestions.appendChild(suggestion);

      const title = document.createElement("div");
      title.innerHTML = flatResults[href].title;
      title.classList.add("search__suggestion-title");
      suggestion.appendChild(title);

      const description = document.createElement("div");
      description.innerHTML = flatResults[href].description;
      description.classList.add("search__suggestion-description");
      suggestion.appendChild(description);
    }
  });
})();
