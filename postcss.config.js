const path = require("path");

module.exports = () => ({
  plugins: [
    require("postcss-import")({
      path: path.posix.join(__dirname, "assets", "css"),
    }),
    require("postcss-url")({
      filter: "**/typeface-*/files/*",
      url: (asset) => {
        return path.posix.join("fonts", path.basename(asset.pathname));
      },
    }),
    require("postcss-nesting"),
    require("postcss-preset-env")({
      stage: 1,
    }),
    ...(process.env.HUGO_ENVIRONMENT === "production"
      ? [
          require("cssnano")({
            preset: "default",
          }),
          require("@fullhuman/postcss-purgecss")({
            content: ["./hugo_stats.json"],
            defaultExtractor: (content) => {
              let els = JSON.parse(content).htmlElements;
              return els.tags.concat(els.classes, els.ids);
            },
            safelist: [":root", "theme"],
            //fontFace: true, TODO
            //variables: true, TODO
          }),
        ]
      : []),
  ],
});
