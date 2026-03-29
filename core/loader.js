import { resolveRoute } from "./router.js";

export async function initApp() {
  const app = document.getElementById("app");

  async function render() {
    const path = window.location.pathname || "/";

    const route = resolveRoute(path);

    if (!route) {
      app.innerHTML = "<h1>404</h1>";
      return;
    }

    const module = await import(route.module);
    module.mount(app);
  }

  window.addEventListener("popstate", render);

  render();
}
