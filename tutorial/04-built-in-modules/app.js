const {readFile, writeFile} = require('fs')

// takes three args, path, encoding, and callback. Passes the callback err and result by default
readFile('./content/first.txt', 'utf-8', (err, result)=> {
    if (err) {
        console.log(err)
        return
    }

    const first = result

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
        
                console.log(result)
            }
        )
    })
 
})


