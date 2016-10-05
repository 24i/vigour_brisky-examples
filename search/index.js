'use strict'
const Hub = require('brisky-hub')

const state = global.state = new Hub({
  url: 'ws://localhost:3030',
  context: false  // default context is your ip address
})

const render = require('brisky/render')
document.body.appendChild(render(require('./app'), state))
