"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const whatwgUrl = require("whatwg-url");
const exportExtensions = require('@babel/plugin-syntax-export-extensions');

/**
 * Appends a cache busting string to any path specifiers.
 */
exports.appendCacheBuster = (filePath, query) => ({
  inherits: exportExtensions,
  visitor: {
    'ImportDeclaration|ExportNamedDeclaration|ExportAllDeclaration'(path) {
      const node = path.node;
      // An export without a 'from' clause
      if (node.source == null) {
          return;
      }
      let specifier = node.source.value;

      if (query) {
        specifier += query;
      }

      node.source.value = specifier;
    }
  }
});
