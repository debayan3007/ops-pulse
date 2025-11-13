// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import eslintPluginVue from 'eslint-plugin-vue'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import vueParser from 'vue-eslint-parser'

export default [{
  ignores: ['dist', 'dist-ssr', 'node_modules', '.yarn'],
}, js.configs.recommended, {
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  plugins: {
    '@typescript-eslint': tseslint,
  },
  rules: {
    ...tseslint.configs.recommended.rules,
  },
}, {
  files: ['**/*.vue'],
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  plugins: {
    vue: eslintPluginVue,
    '@typescript-eslint': tseslint,
  },
  rules: {
    ...eslintPluginVue.configs['flat/recommended'].rules,
    ...tseslint.configs.recommended.rules,
  },
}, {
  files: ['**/*.stories.{js,ts,jsx,tsx}'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
}, prettierConfig, ...storybook.configs['flat/recommended']]
