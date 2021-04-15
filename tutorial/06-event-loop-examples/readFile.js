const { readFile } = require('fs')

console.log('started a first task')

readFile('../04-built-in-modules/content/first.txt',
'utf8',
(err, result) =>{
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})

console.log('starting next task')