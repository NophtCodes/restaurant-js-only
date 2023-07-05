import { createHeader, createMain, sidebarFunc } from './components.js';

export function initializeWebsite() {
  const content = document.createElement('div');
  content.appendChild(createHeader());
  content.appendChild(createMain());

  document.body.appendChild(content);
  sidebarFunc();
}