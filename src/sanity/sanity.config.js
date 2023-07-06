import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
    projectId: 'btyqzbhp',
    dataset: 'production',
    title: 'STTI NIIT I-Tech Website Admin Dashboard',
    apiVersion: '2023-07-06',
    basePath: '/admin',
    plugins: [deskTool()]
});

export default config;
