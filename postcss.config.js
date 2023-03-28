const path = require("path");

module.exports = () => ({
  plugins: [
    require("postcss-import")({
      path: [
        // Check for imports in <theme-dir>/css/assets
        // TODO use Hugo's built-in inlineImports?
        path.posix.join(__dirname, "assets", "css"),
      ],
    }),
    require("postcss-url")([
      {
        filter: "**/typeface-*/files/*",
        url: (asset) => {
          // Construct font path relative to <publish-dir>/css/bundle.css
          // Fonts must be mounted into static/ dir
          return path.posix.join("/", "fonts", path.basename(asset.pathname));
        },
      },
    ]),
    require("postcss-nesting"),
    require("postcss-custom-media"),
    ...(process.env.HUGO_ENVIRONMENT === "production"
      ? [
          require("postcss-preset-env"),
          require("cssnano"),
          require("@fullhuman/postcss-purgecss")({
            content: ["./hugo_stats.json"],
            defaultExtractor: (content) => {
              let els = JSON.parse(content).htmlElements;
              return els.tags.concat(els.classes, els.ids);
            },
            safelist: ["data-theme"],
          }),
        ]
      : []),
  ],
});
