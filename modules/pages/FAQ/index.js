import { view } from "./view.js";

export function mount(el) {
  el.innerHTML = view();

  document.getElementById("backBtn")
    .addEventListener("click", () => {
      history.pushState({}, "", "/");
      window.dispatchEvent(new Event("popstate"));
    });
}
