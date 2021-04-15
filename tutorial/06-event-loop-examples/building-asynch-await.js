const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromies = util.promisify(writeFile)


const start = async() => {
    try{ 
        const first = await readFile('./04-built-in-modules/content/first.txt', 'utf8')
        const second = await readFile('./04-built-in-modules/content/second.txt', 'utf8')
        await writeFile('./04-built-in-modules/content/result-async.txt', `THIS IS GREAT: ${first}, ${second}`)
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path,
//         'utf8',
//         (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }


// getText('./tutorial/04-built-in-modules/content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))
