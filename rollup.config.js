import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import clear from 'rollup-plugin-clear';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-css-only';

export default async function config() {
	return {
		input: 'src/index.ts',
		output: [
			{
				format: 'cjs',
				dir: 'dist',
				sourcemap: true,
			},
		],
		external: ['vue'],
		plugins: [
			clear({
				targets: ['./dist'],
			}),
			css(),
			nodeResolve(),
			vue(),
			commonjs(),
			typescript({
				check: false,
			}),
		],
	};
}
