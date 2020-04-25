import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import alias from '@rollup/plugin-alias';
import json from 'rollup-plugin-json';
import replace from '@rollup/plugin-replace';
import emitFiles from 'rollup-plugin-emit-files';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';

import react from 'react';
import reactDom from 'react-dom';

import tsconfig from './tsconfig.json';
import pkg from './package.json';

const extensions = ['.ts', '.tsx', '.json', '.js'];

const production = !process.env.ROLLUP_WATCH;
const env = production ? 'production' : 'development';

const src = 'src';
const dest = 'dist';

export default {
  input: production ? 'index.js' : `${src}/index.tsx`,
  output: [{
    dir: dest,
    format: production ? 'cjs' : 'iife',
    sourcemap: !production && 'inline',
  },
  {
    file: pkg.module,
    format: 'es',
  }],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    resolve({ extensions }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        react: Object.keys(react),
        'react-dom': Object.keys(reactDom),
        'object-assign': Object.keys(Object.assign),
      },
    }),
    typescript({ useTsconfigDeclarationDir: true, clean: true }),
    alias({
      resolve: ['.ts'],
      entries: Object.entries(tsconfig.compilerOptions.paths)
        .map(([find, [replacement]]) => ({ find, replacement })), // prettier-ignore
    }),
    json(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    emitFiles({ src: 'public' }),
    !production && livereload({ watch: dest }),
    !production && serve({ contentBase: dest, port: 8080 }),
    production && terser(),
  ],
};
