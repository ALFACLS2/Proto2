import { faqList } from "./faq.data.js";

export function view() {
  return `
  <div class="card">
    <h1>FAQ</h1>

    ${faqList.map(f => `
      <div class="faq-item">
        <strong>${f.q}</strong>
        <p>${f.a}</p>
      </div>
    `).join("")}

    <button id="backBtn" class="btn">⬅ Back</button>
  </div>
  `;
}
