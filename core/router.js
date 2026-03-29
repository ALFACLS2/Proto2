import { registry } from "./registry.js";

export function resolveRoute(path) {
  return registry.find(r => r.route === path);
}
const BASE = "/Proto2"; // ganti sama nama repo lo

export function resolveRoute(path) {
  const cleanPath = path.replace(BASE, "") || "/";
  return registry.find(r => r.route === cleanPath);
}
