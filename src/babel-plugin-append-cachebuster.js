"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const whatwgUrl = require("whatwg-url");

/**
 * Appends a cache busting string to any path specifiers.
 */
exports.appendCacheBuster = (filePath, query) => ({
  visitor: {
    'ImportDeclaration|ExportNamedDeclaration|ExportAllDeclaration'(path) {
      const node = path.node;
      // An export without a 'from' clause
      if (node.source == null) {
          return;
      }
      let specifier = node.source.value;

      if (query) {
        specifier += `?${query}`;
      }

      node.source.value = specifier;
    }
  }
});
