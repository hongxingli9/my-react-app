import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from "eslint-config-prettier/flat";
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    plugins: {
      'prettier': prettierPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
       "@typescript-eslint/no-explicit-any": "off",
      // 开启 prettier 自动修复规则
      'prettier/prettier': 'error',
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  // 必须放在最后，用于关闭与 prettier 冲突的常规 lint 规则
  prettierConfig,
]);
