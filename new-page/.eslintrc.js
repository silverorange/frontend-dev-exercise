module.exports = {
  extends: ['airbnb', 'react-app', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }]
  }
};
