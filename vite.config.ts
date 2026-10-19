import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const [repositoryOwner, repositoryName] =
  process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const isGitHubUserOrOrganizationSite =
  repositoryName === `${repositoryOwner}.github.io`;
const base =
  process.env.VITE_BASE_PATH ??
  (process.env.GITHUB_ACTIONS === 'true' &&
  repositoryName &&
  !isGitHubUserOrOrganizationSite
    ? `/${repositoryName}/`
    : '/');

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(projectRoot, 'src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  server: {
    host: '0.0.0.0',
  },
  preview: {
    host: '0.0.0.0',
  },
});
