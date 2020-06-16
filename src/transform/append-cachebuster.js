"use strict";
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", { value: true });

const babelCore = require("@babel/core");
const babel_plugin_append_cachebuster = require("../babel-plugin-append-cachebuster.js");
const file_js_1 = require("../file.js");
const stream_js_1 = require("../stream.js");

exports.appendCacheBuster = (query) => stream_js_1.transformStream((file) => __awaiter(this, void 0, void 0, function* () {

  const plugins = [babel_plugin_append_cachebuster.appendCacheBuster(file.path, query)];
  const scriptSource = yield file_js_1.getFileContents(file);
  try {
    console.log(`Appending cachebuster to ${file.path}`);
    const transformedScriptSource = babelCore.transform(scriptSource, { plugins }).code;
    file.contents = Buffer.from(transformedScriptSource);
  } catch (error) {
    console.error(`Failed to append cachebuster to ${file.path}`);
    console.error(error);
  }
  return file;
}));
