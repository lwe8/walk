import type { TraverseOptions, Node, Scope, NodePath } from "@babel/traverse";

declare function walk(
  parent: Node,
  opts?: TraverseOptions,
  scope?: Scope,
  state?: any,
  parentPath?: NodePath
): void;

export type { TraverseOptions, Node, Scope, NodePath };
export default walk;
