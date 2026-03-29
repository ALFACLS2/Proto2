import { view } from './view.js';
import { layout } from '../../../components/layouts/default.js';

export function render() {
  const app = document.getElementById('app');
  app.innerHTML = layout(view());

  const btn = document.getElementById('faqBtn');

  btn.addEventListener('click', () => {
    btn.classList.add('active');

    setTimeout(() => {
      btn.classList.remove('active');
      window.location.pathname = '/faq';
    }, 200);
  });
}
