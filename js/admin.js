import { posts, services, team } from './data.js';

export function populateAdminTables() {
  const postTable = document.getElementById('admin-posts');
  if (postTable) {
    posts.forEach(p => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${p.title}</td><td>${p.category}</td>`;
      postTable.appendChild(row);
    });
  }
  const serviceTable = document.getElementById('admin-services');
  if (serviceTable) {
    services.forEach(s => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${s.title}</td><td>${s.desc}</td>`;
      serviceTable.appendChild(row);
    });
  }
  const userTable = document.getElementById('admin-users');
  if (userTable) {
    team.forEach(t => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${t.name}</td><td>${t.role}</td>`;
      userTable.appendChild(row);
    });
  }
}

document.addEventListener('DOMContentLoaded', populateAdminTables);
