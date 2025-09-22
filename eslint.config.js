import { defineConfig } from 'eslint/config';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';

export default defineConfig([

  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      prettier
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'prefer-const': 'error'
    }
  },
  
  {
    files: ["src/**/*.vue"],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn"
    }
  },
  
  {
    ignores: ["dist/**", "node_modules/**"]
  }
])
