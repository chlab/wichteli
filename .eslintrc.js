module.exports = {
  // root: true,
  // env: {
  //     browser: true,
  //     node: true
  // },
  extends: [
    'plugin:vue/essential',
    // '@vue/prettier',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  plugins: ['prettier'],
  rules: {}
}
