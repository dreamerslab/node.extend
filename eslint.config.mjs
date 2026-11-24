import ljharb from '@ljharb/eslint-config/flat';

export default [
  {
    ignores: [
      'coverage/**',
      '.nyc_output/**',
    ],
  },
  ...ljharb,
  {
    rules: {
      complexity: 'off',
      eqeqeq: ['error', 'allow-null'],
      'func-style': ['error', 'declaration'],
      indent: ['error', 2],
      'max-depth': ['error', 5],
      'multiline-comment-style': 'off',
      'no-continue': ['warn'],
      'no-restricted-syntax': [
        'error',
        'BreakStatement',
        'DebuggerStatement',
        'LabeledStatement',
        'WithStatement',
      ],
      'sort-keys': 'off',
    },
  },
];
