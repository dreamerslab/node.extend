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
      'array-bracket-newline': 'off',
      complexity: 'off',
      eqeqeq: ['error', 'allow-null'],
      'func-style': ['error', 'declaration'],
      indent: ['error', 2],
      'max-depth': ['error', 5],
      'multiline-comment-style': 'off',
      'no-continue': ['warn'],
      'max-params': ['error', 3],
      'max-statements': ['error', 29],
      'no-param-reassign': 'off',
      'no-restricted-syntax': [
        'error',
        'BreakStatement',
        'DebuggerStatement',
        'LabeledStatement',
        'WithStatement',
      ],
      'sort-keys': 'off',
      'spaced-comment': [
        'warn',
        'always',
        { markers: ['*'] },
      ],
    },
  },
];
