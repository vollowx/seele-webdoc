import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { ROOT_URL, NPM_URL, GITHUB_URL, SOURCEHUT_URL, LANGUAGES } from './config.ts';
import litPlugin from '@lit-labs/eleventy-plugin-lit';

import { wrapTables } from './eleventy/wrap-tables.js';
import { addTocFilter } from './eleventy/toc.js';
import { minifyHtml } from './eleventy/minify-html.js';
import { markdownPreprocess } from './eleventy/markdown-preprocess.js';

const root_dir = path.dirname(fileURLToPath(import.meta.url));

const siteUrl = ROOT_URL;

function getSeeleVersion() {
  try {
    const packageJsonPath = path.join(root_dir, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const seeleVersion = packageJson.dependencies['@vollowx/seele'];

    // Remove ^ or ~ prefix if present
    const cleanVersion = seeleVersion.replace(/^[\^~]/, '');

    return {
      version: cleanVersion,
      npmUrl: `${NPM_URL}/v/${cleanVersion}`
    };
  } catch (error) {
    console.warn('Failed to get seele version', error);
    return {
      version: 'unknown',
      npmUrl: NPM_URL
    };
  }
}

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    './.tmp/client/': 'client',
  });

  // SSR web components
  eleventyConfig.addPlugin(litPlugin, {
    mode: 'worker',
    componentModules: ['./.tmp/ssr/ssr.js'],
  });

  eleventyConfig.addShortcode('inlineCss', (filePath) => {
    const fullPath = path.resolve(root_dir, filePath);
    return fs.readFileSync(fullPath, 'utf8');
  });

  eleventyConfig.addGlobalData('siteUrl', siteUrl);
  eleventyConfig.addGlobalData('githubUrl', GITHUB_URL);
  eleventyConfig.addGlobalData('sourcehutUrl', SOURCEHUT_URL);
  eleventyConfig.addGlobalData('languages', LANGUAGES);

  eleventyConfig.addGlobalData('seeleVersion', getSeeleVersion());

  eleventyConfig.addFilter('stripLang', function(url) {
    const languageCodes = Object.keys(this.ctx.languages);
    const langPattern = languageCodes.join('|');
    // Remove language prefixes from URL
    return url
      .replace(new RegExp(`^/(${langPattern})/`), '/')
      .replace(new RegExp(`^/(${langPattern})$`), '/');
  });

  markdownPreprocess(eleventyConfig, siteUrl);
  wrapTables(eleventyConfig);
  addTocFilter(eleventyConfig);
  minifyHtml(eleventyConfig);

  return {
    dir: {
      input: './docs/',
      output: './dist/',
      includes: '../templates/',
    },
    templateFormats: ['md'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
}
