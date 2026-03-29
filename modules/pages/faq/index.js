import { getFAQ } from './service.js';
import { view } from './view.js';
import { layout } from '../../../components/layouts/default.js';

export function render() {
  const data = getFAQ();

  document.getElementById('app').innerHTML =
    layout(view(data));
}
