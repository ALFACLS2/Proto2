export function view(data) {
  return `
    <div class="card">
      <h1>FAQ</h1>
      ${data.map(f => `
        <div>
          <b>${f.q}</b>
          <p>${f.a}</p>
        </div>
      `).join('')}
    </div>
  `;
}
