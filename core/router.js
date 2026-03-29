import { mount as lowongan } from "../modules/pages/lowongan/index.js";
import { mount as faq } from "../modules/pages/faq/index.js";

export function initRouter() {
  const app = document.getElementById("app");

  function render() {
    const path = window.location.pathname;

    if (path === "/" || path === "/index.html") {
      lowongan(app);
    } else if (path === "/faq") {
      faq(app);
    } else {
      app.innerHTML = "<h1>404 Not Found</h1>";
    }
  }

  window.addEventListener("popstate", render);

  render();
}
