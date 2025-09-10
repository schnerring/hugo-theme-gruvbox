import path from "path";
import postcssImport from "postcss-import";
import postcssUrl from "postcss-url";
import postcssNesting from "postcss-nesting";
import postcssCustomMedia from "postcss-custom-media";
import postcssPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";
import { purgeCSSPlugin } from "@fullhuman/postcss-purgecss";

export default {
  plugins: [
    postcssImport({
      path: [
        // Check for imports in <theme-dir>/css/assets
        // TODO use Hugo's built-in inlineImports?
        path.posix.join(import.meta.dirname, "assets", "css"),
      ],
    }),
    postcssUrl([
      {
        filter: "**/typeface-*/files/*",
        url: (asset) => {
          // Construct font path relative to <publish-dir>/css/bundle.css
          // Fonts must be mounted into static/ dir
          return path.posix.join("/", "fonts", path.basename(asset.pathname));
        },
      },
    ]),
    postcssNesting,
    postcssCustomMedia,
    ...(process.env.HUGO_ENVIRONMENT === "production"
      ? [
          postcssPresetEnv,
          cssnano,
          purgeCSSPlugin({
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
};
