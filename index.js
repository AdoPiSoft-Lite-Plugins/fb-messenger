'use strict'
var { app } = require('plugin-core')
var router = require('./router')
var models = require('./models')

module.exports = {
  async init () {
    await models.init()
    app.use(router)
  }
}
