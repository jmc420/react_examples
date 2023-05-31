import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

export default {
  input: './build/App.js',
  output: [
    {
      file: './public/client.js',
      format: 'module'
    },
  ],
  plugins: [
    commonjs(), 
    nodeResolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};