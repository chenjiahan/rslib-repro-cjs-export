import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'cjs',
      syntax: 'es2021',
    },
  ],
  output: { target: 'node' },
});
