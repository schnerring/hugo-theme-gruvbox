module.exports = () => ({
  plugins: [
    require("postcss-import"),
    require("postcss-url")({
      url: "inline",
    }),
    require("postcss-nesting"),
    require("postcss-preset-env")({
      stage: 1,
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
});
