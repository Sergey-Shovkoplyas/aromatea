import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import reactPlugin from "eslint-plugin-react"
import { globalIgnores } from 'eslint/config' 

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      reactPlugin.configs.flat.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    plugins: {
      react: reactPlugin
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "object-curly-spacing": ["error", "always"], // Enforces spaces inside { t }
      "react/jsx-tag-spacing": [
        "error",
        {
          closingSlash: "never", // No space before the closing slash (self-closing tags)
          beforeSelfClosing: "always", // A space is required before the closing bracket
          afterOpening: "never", // No space after opening `<`
          beforeClosing: "never" // No space before closing `</`
        }
      ],
      // "react/jsx-curly-spacing": [
      //   "error",
      //   {
      //     when: "always",
      //     children: true,
      //     attributes: false // Enforces spaces only for children, not for attributes
      //   }
      // ]
    }
  }
])
