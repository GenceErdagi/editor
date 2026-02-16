// lib/tree-sitter.ts
// Tree-sitter client initialization utilities

import { getTreeSitterClient, type TreeSitterClient } from "@opentui/core";
import { createResource, type Resource } from "solid-js";

export type TreeSitterResource = Resource<TreeSitterClient>;

/**
 * Initialize Tree-sitter client with proper async handling
 * Returns a SolidJS resource that resolves to the initialized client
 */
export function createTreeSitterResource(): TreeSitterResource {
  const [client] = createResource<TreeSitterClient>(async () => {
    const treeSitterClient = getTreeSitterClient();
    await treeSitterClient.initialize();
    return treeSitterClient;
  });

  return client;
}

/**
 * Check if Tree-sitter client is ready for use
 */
export function isTreeSitterReady(
  resource: TreeSitterResource
): boolean {
  return resource.state === "ready" && resource() !== undefined;
}
