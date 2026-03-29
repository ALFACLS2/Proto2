import { registry } from './registry.js';

export async function router() {
  const path = window.location.pathname;

  const match = registry.find(r => r.route === path) 
              || registry.find(r => r.route === '/lowongan');

  const module = await import(match.entry);
  module.render();
}
