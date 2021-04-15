const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// when we have event reponse do x
customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id: ${id}`)
})
customEmitter.on('response', () => {
    console.log(`something else, also!`)
})

// event named response happens
customEmitter.emit('response', 'John', 34)
