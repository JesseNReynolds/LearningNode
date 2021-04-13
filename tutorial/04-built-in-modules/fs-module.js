const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

// creates file at path passed as first arg if not present
// makes the contents the second arg, overwriting if there's stuff there already
// writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}` )

// as above but appends
writeFileSync('./content/result-sync.txt', 
`Here is the result: ${first}, ${second}`, 
{flag: 'a'} 
)