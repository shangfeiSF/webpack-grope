import {TEN, TWENTY} from 'numbers'
import {DES} from 'noParseFile'

import * as math from 'math'

let add = math.add(TEN, TWENTY)
let subtract = math.subtract(TEN, TWENTY)
let multiply = math.multiply(TEN, TWENTY)
let divide = math.divide(TEN, TWENTY)

console.log(add)
console.log(subtract)
console.log(multiply)
console.log(divide)

// require.ensure(dependencies: String[], callback: function(require),
// chunkName: String)
require.ensure([], (require) => {
  // loaded and executed `base.js`
  let {info} = require('base').default
  let {homeHandler, aboutHandler} = require('handlers').default
  homeHandler(info)
  aboutHandler(info)
}, 'chunksInEntry_single')

require.ensure(['base'], (require) => {
  // loaded and but not executed `base.js`
  let {home, about} = require('routes').default
  let {homeHandler, aboutHandler} = require('handlers').default
  homeHandler(home)
  aboutHandler(about)
}, 'chunksInEntry_double')