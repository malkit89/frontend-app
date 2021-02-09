// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    "parser": "babel-eslint",
    sourceType: 'module',
    "ecmaVersion": 2020
  },
  env: {
    node: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  //extends: ['plugin:vue/essential', 'plugin:vue/vue3-recommended', '@vue/prettier'],
  extends: ['plugin:vue/essential', 'prettier','prettier/vue'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,    
    'no-unused-vars': 0,
    'no-undef': 0,
    'quotes':[1,'single']
  }
}
