import path from 'path';

/**
 * @param {string} content - Markdown content to process
 * @param {object} env - Eleventy environment with page metadata
 * @param {string} docsRoot - Absolute path to the docs directory
 * @returns {string} - Content with converted links
 */
export function convertLinks(content, env, docsRoot, siteUrl) {
  // Get source file from env if available
  const sourceMdFile = env?.page?.inputPath
    ? path.relative(docsRoot, env.page.inputPath)
    : '';

  return content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
    // Skip external links (http, https, mailto, etc.)
    if (url.match(/^(https?:|mailto:|#)/)) {
      return match;
    }

    // Transform .md links to HTML paths
    if (url.endsWith('.md')) {
      let htmlPath = url.replace(/\.md$/, '');

      // If it's a relative path, resolve it relative to the source file's directory
      if (!htmlPath.startsWith('/')) {
        const sourceDir = path.dirname(sourceMdFile).replace(/\\/g, '/');
        const normalizedHtmlPath = htmlPath.replace(/\\/g, '/');
        const resolvedPath = path.posix.normalize(
          path.posix.join(sourceDir, normalizedHtmlPath),
        );

        const baseName = path.posix.basename(resolvedPath);
        // Handle root index and empty paths
        if (
          (baseName === 'index' && path.posix.dirname(resolvedPath) === '.') ||
          resolvedPath === '.' ||
          resolvedPath === ''
        ) {
          htmlPath = '';
        } else if (baseName === 'index') {
          // For index files in subdirectories, link to the directory
          const dir = path.posix.dirname(resolvedPath);
          htmlPath = dir + '/';
        } else {
          // For non-index files, add trailing slash
          htmlPath = resolvedPath + '/';
        }
      } else {
        htmlPath = htmlPath + '/';
      }

      let finalUrl = htmlPath;
      if (siteUrl) {
        finalUrl = siteUrl.endsWith('/') ? siteUrl + htmlPath : siteUrl + '/' + htmlPath;
      } else {
        finalUrl = '/' + htmlPath;
      }
      return `[${text}](${finalUrl})`;
    }

    return match;
  });
}
