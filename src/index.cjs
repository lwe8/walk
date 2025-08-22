const traverse = require("@babel/traverse").default;
/**
 * @typedef {import("@babel/traverse").TraverseOptions} TraverseOptions
 * @typedef {import("@babel/traverse").Node} Node
 * @typedef {import("@babel/traverse").Scope} Scope
 * @typedef {import("@babel/traverse").NodePath} NodePath
 */

/**
 * babel/traverse clone to fix ESM import
 *
 * @param {Node} parent
 * @param {TraverseOptions} [opts]
 * @param {Scope} [scope]
 * @param {*} [state]
 * @param {NodePath} [parentPath]
 * @returns {void}
 */
function walk(parent, opts, scope, state, parentPath) {
  return traverse(parent, opts, scope, state, parentPath);
}

module.exports = walk;
