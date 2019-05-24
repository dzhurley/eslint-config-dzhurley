module.exports = {
  env: {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'mocha': true,
    'node': true,
    'worker': true
  },

  extends: ['eslint:recommended'],

  parser: 'babel-eslint',

  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    }
  },

  rules: {
    // best practices
    'block-scoped-var': 2,
    'curly': [2, 'multi-line'],
    'dot-notation': 2,
    'dot-location': [2, 'property'],
    'eqeqeq': [2, 'smart'],
    'no-else-return': 2,
    'no-floating-decimal': 2,
    'no-invalid-this': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-new': 2,
    'no-self-compare': 2,
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    'no-useless-concat': 2,
    'radix': 2,

    // strict mode
    'strict': [2, 'global'],

    // variables
    'no-undefined': 2,
    'no-unused-vars': [2, {
      args: 'all',
      argsIgnorePattern: '^_$',
      varsIgnorePattern: '^_$'
    }],

    // stylistic issues
    'array-bracket-spacing': 2,
    'block-spacing': 2,
    'brace-style': 2,
    'camelcase': 2,
    'comma-spacing': [2, { before: false, after: true }],
    'comma-style': 2,
    'computed-property-spacing': 2,
    'indent': ['error', 2],
    'jsx-quotes': 2,
    'key-spacing': 2,
    'keyword-spacing': 2,
    'no-lonely-if': 2,
    'no-multiple-empty-lines': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'object-curly-spacing': [2, 'always'],
    'operator-assignment': 2,
    'operator-linebreak': [2, 'after'],
    'quotes': [2, 'single', 'avoid-escape'],
    'semi': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': 2,

    // es6
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': 2,
    'object-shorthand': 2
  }
};
