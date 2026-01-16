/** @type {import("prettier").Config} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],

  tailwindFunctions: ['clsx', 'cva'],
  tailwindStylesheet: './src/app/globals.css',

  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  bracketSpacing: true,
  arrowParens: 'always',
};

export default config;
