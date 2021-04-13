const {readFile, writeFile} = require('fs')

// Will look at async/await later to clean up the callback hell etc
console.log('ready')
// takes three args, path, encoding, and callback. Passes the callback err and result by default
readFile('./content/first.txt', 'utf-8', (err, result)=> {
    if (err) {
        console.log(err)
        return
    }

    const first = result
    console.log('starting first task')

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
    
        const second = result
        
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
        
                console.log('done')
            }
        )
    })
 
})
console.log('starting with next')

