import { posts } from './data.js';

// Render posts to container
export function renderPosts(filter = 'all') {
  const container = document.getElementById('blog-posts');
  if (!container) return;
  container.innerHTML = '';
  posts.filter(p => filter === 'all' || p.category === filter)
       .forEach(p => {
          const article = document.createElement('article');
          article.className = 'post';
          article.innerHTML = `<h4><a href="/blog/${p.slug}.html">${p.title}</a></h4>
            <time datetime="${p.date}">${p.date}</time>
            <p>${p.content.slice(0,100)}...</p>`;
          container.appendChild(article);
       });
}

// Handle category filter
export function setupBlogFilter() {
  const select = document.getElementById('category-filter');
  if (!select) return;
  renderPosts();
  select.addEventListener('change', () => renderPosts(select.value));
}

document.addEventListener('DOMContentLoaded', setupBlogFilter);
