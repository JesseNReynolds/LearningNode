const { createReadStream } = require('fs')

const stream = createReadStream('../content/big.txt', {highWaterMark: 90000})

stream.on('data', (result) => {
    console.log(result)
})
stream.on('error', (err) => {
    console.log(err)
})
// Look it generates a 'big' file
// const { writeFileSync } = require('fs')
// for (let i = 0; i < 1000; i++) {
//     writeFileSync('./tutorial/04-built-in-modules/content/big.txt', `hello world ${i}\n`, { flag: 'a' })
// }