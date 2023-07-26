module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['node_modules', 'dist', 'index.html', 'storybook-static'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte', '.cjs'],
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:svelte/recommended',
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': ['warn', { allow: ['error'] }],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': false,
        minimumDescriptionLength: 10,
      },
    ],
    'no-multi-spaces': 'off',
    '@typescript-eslint/comma-spacing': 'off',
    'array-bracket-spacing': 'off',
    'no-restricted-syntax': 0,
    '@typescript-eslint/require-await': 'off',
    'class-methods-use-this': 'off',
    // Since functions are hoisted
    '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      extends: ['plugin:@intlify/svelte/recommended'],
      rules: {
        'import/first': 'off',
        'import/no-duplicates': 'off',
        'import/no-mutable-exports': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-multiple-empty-lines': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        'no-void': 'off',
        'no-useless-escape': 'off',
        'no-underscore-dangle': 'off',
        'no-bitwise': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        'no-undef-init': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        'object-curly-newline': 'off',
        '@typescript-eslint/brace-style': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/indent': 'off',
        'function-paren-newline': 'off',
        'implicit-arrow-linebreak': 'off',
        'max-len': 'off',
        'operator-linebreak': 'off',
        'space-in-parens': 'off',
        'no-confusing-arrow': 'off',
        'no-constant-condition': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        'no-sequences': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@intlify/svelte/no-raw-text': 'warn',
      },
    },
    {
      files: ['*.cjs', '*.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
      },
    },
    {
      files: ['*.ts'],
      rules: {
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            ts: 'never',
          },
        ],
        'import/prefer-default-export': 'off',
        'no-void': 'off',
        'no-underscore-dangle': 'off',
        'object-curly-newline': 'off',
        '@typescript-eslint/brace-style': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/indent': 'off',
        'function-paren-newline': 'off',
        'implicit-arrow-linebreak': 'off',
        'max-len': 'off',
        'operator-linebreak': 'off',
        'space-in-parens': 'off',
        'no-confusing-arrow': 'off',
        'no-constant-condition': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          { accessibility: 'no-public' },
        ],
      },
    },
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  globals: {
    vi: true,
    $$Generic: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {},
    },
  },
};
