import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['cjs'],
  target: 'node18',
  dts: true,
  clean: true,
  shims: true,
});
