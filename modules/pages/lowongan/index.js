import { view } from "./view.js";

export function mount(el) {
  el.innerHTML = view();

  document.getElementById("faqBtn")
    .addEventListener("click", () => {
      history.pushState({}, "", "/faq");
      window.dispatchEvent(new Event("popstate"));
    });
}
