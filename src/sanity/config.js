import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './schemas';

const config = defineConfig({
    projectId: 'btyqzbhp',
    dataset: 'production',
    title: 'STTI NIIT I-Tech Website Admin Dashboard',
    apiVersion: '2023-07-06',
    basePath: '/admin',
    plugins: [deskTool(), visionTool()],
    schema: { types: schemas}
});

export default config;
