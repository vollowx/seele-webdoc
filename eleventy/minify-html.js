/**
 * @param {object} eleventyConfig
 */
export function minifyHtml(eleventyConfig) {
  const isDev = process.env.NODE_ENV === 'DEV';

  eleventyConfig.addTransform('htmlMinify', async function(content, outputPath) {
    if (isDev || !outputPath || !outputPath.endsWith('.html')) {
      return content;
    }

    const { minify } = await import('html-minifier');

    const minified = minify(content, {
      useShortDoctype: true,
      removeComments: true, // or SSR'd templates will mismatch
      collapseWhitespace: false, // or it breaks template attributes
      removeAttributeQuotes: false, // as esbuild already does this
      minifyCSS: false,
      minifyJS: false,
    });

    return minified;
  });
}
