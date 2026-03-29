import { registry } from "./registry.js";

export function resolveRoute(path) {
  return registry.find(r => r.route === path);
}
