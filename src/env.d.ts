/// <reference types="astro/client" />

type KVNamespace = import("@cloudflare/ai").Ai;
type ENV = {
  AI: Ai;
};

// Depending on your adapter mode
// use `AdvancedRuntime<ENV>` for advance runtime mode
// use `DirectoryRuntime<ENV>` for directory runtime mode
type Runtime = import("@astrojs/cloudflare").AdvancedRuntime<ENV>;
declare namespace App {
  interface Locals extends Runtime {}
}
