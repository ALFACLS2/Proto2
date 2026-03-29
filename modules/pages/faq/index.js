import { getFAQ } from './service.js';
import { view } from './view.js';
import { layout } from '../../../components/layouts/default.js';

export function render() {
  const data = getFAQ();

  const app = document.getElementById('app');
  app.innerHTML = layout(view(data));

  document.getElementById('backBtn').addEventListener('click', () => {
    window.location.pathname = '/lowongan';
  });
}
