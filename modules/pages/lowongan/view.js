import { links } from "../../../data/links.js";

export function view() {
  return `
  <div class="bg"></div>

  <div class="card">
    <div class="hero">
      <div class="hero-img"></div>
    </div>

    <h1>Start Your Career</h1>
    <div class="sub">
      Ikuti langkah berikut untuk melamar kerja
    </div>

    <a href="${links.register}" class="btn primary" target="_blank">
      🚀 Register
    </a>

    <a href="${links.apply}" class="btn" target="_blank">
      📄 Apply Job
    </a>

    <div class="separator"></div>

    <div class="social">
      <button id="faqBtn" class="btn">❓ FAQ</button>
      <a href="${links.tiktok}" target="_blank">TikTok</a>
    </div>
  </div>
  `;
}
