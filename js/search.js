import { posts, services } from './data.js';

export function setupSearch() {
  const input = document.getElementById('search');
  const list = document.getElementById('suggestions');
  if (!input || !list) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    list.innerHTML = '';
    if (q.length < 2) return;
    const results = posts.concat(services)
      .filter(item => item.title.toLowerCase().includes(q))
      .slice(0,5);
    results.forEach(r => {
      const li = document.createElement('li');
      li.textContent = r.title;
      list.appendChild(li);
    });
  });
}

document.addEventListener('DOMContentLoaded', setupSearch);
