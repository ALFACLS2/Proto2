export function view(data) {
  return `
    <div class="bg"></div>

    <div class="card">
      <h1>FAQ</h1>

      ${data.map(f => `
        <div style="margin-bottom:10px;">
          <b>${f.q}</b>
          <p>${f.a}</p>
        </div>
      `).join('')}

      <button id="backBtn" class="btn">← Back</button>
    </div>
  `;
}
