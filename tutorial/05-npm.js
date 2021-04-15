// create local dependency for this project
// npm i <packageName>

// create global dependency - use it in any project
// (might need sudo) npm install -g <packageName>

// package.json is a manifest file which stores important info
// you can manually create in the root
// or
// npm init (step by step)
// npm init -y (everything as default)

// Installing packages may also add other packages which are dependencies for that package
// Bootstrap ships with popper and jquery for example

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)