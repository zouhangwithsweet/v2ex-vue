'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MOCK_URL: '"/api"',
  TRUE_URL: '"https://www.v2ex.com/api"'
})
