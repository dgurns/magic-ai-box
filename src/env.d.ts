/// <reference types="astro/client" />

type Ai = import("@cloudflare/ai").Ai;
type ENV = {
  AI: Ai;
};

type Runtime = import("@astrojs/cloudflare").AdvancedRuntime<ENV>;
