const { DefinePlugin } = require('webpack');

const definePlugin = new DefinePlugin({
  RESPOND_MOCK_RESULT_DELAY: process.env.RESPOND_MOCK_RESULT_DELAY || 1000
});

module.exports = { definePlugin };
