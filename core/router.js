import { registry } from './registry.js';

export async function router() {
  const path = window.location.pathname;replace('/Proto2', '');

  const match = registry.find(r => r.route === path) 
              || registry.find(r => r.route === '/lowongan');

  const module = await import(match.entry);
  module.render();
}
