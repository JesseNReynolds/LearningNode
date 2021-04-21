# A few differences between Browser vs Node
- Node doesn't have a DOM
- Node doesn't have a Window
- Node uses CommonJS for modules instead of ES6

# Installed, now what?
CLI or REPL
"REPL is for playing around, CLI is for anything else", "this is likely the only time we will use REPL in this course"
REPL is basically like TUX or Rails Console

# Creating a project
## 01-intro.js
- Made the tutorial dir
- Made 01-intro.js
- $node *filename* to run a file in node

# Globals in Node
## 02-globals.js
- Remember there is no window!
- We do have:
  - __dirname => path to current dir
  - __filename => current filename
  - require => fn to use modules (CommonJS)
  - module => info about current module (file_
  - process => info about env where the program is being executed
- you can console.log any of these.

# Modules in Node
## 03-modules
- Use modules to seperate concerns and give structure.
- Very similar to es6 modules, like in react.
- With CommonJS, every file is a module by default.
- Exports are a JS object, we add the exports we want.
- To export, set modules.exports to equal an obj containing the variables to export
  - module.export = {john, peter}
  - module.export = {john: 'John', peter: 'Peter'}
- If we invoke in a function in an import, it will run the ivoked function (see addValues).

# Built-in Modules
## 04-built-in-modules
- Theres a bunch of em. Check the docs.
  - OS module gives info about the machine
  - path module gives info about paths

# HTTP Module Setup
## 04-built-in-modules
- This will be brief because there will be lots more HTTP coming up.
- In the future we will be using Express to abstract some of the HTTP modules functionality
- With default HTTP module we can use if/else to route for paths and a badpath page


# NPM
## 05-npm.js
- BUT WAIT THERE'S MORE
- You're quite probably not the first person to try to do something like the thing you're doing. It's often worth checking if someone else has done the thing and shared the thing.
- Use NPM to
  - Reuse our own code
  - Use code from other devs
  - Share your code with other devs
- NPM calls reusable code a package
  - You may also hear dependency or module, they're often used interchangeably
- THERE IS NO QUALITY CONTROL, USE YOUR HEAD
  - If weekly downloads are high, it's likely a solid package
- When pushing to github, no reason to include the node_modules.
  - Next dev (or future you) can clone the repo and just run npm install to grab dependencies listed in the package.json
- NPX and local dependencies tend to work more uniformly than global dependencies
- package-lock.json helps make sure that dependencies of dependincies are correct verisons

# Nodemon and devDependencies
- 'refreshes' on saves
- npm i nodemon -D saves as dev dependency
- use devDependencies for things like linting, testing, etc which you want in your dev environment but not your release.
- we also changed our scripts in package.json so that there is a start script which runs nodemon app.js

# Event loop basics
## 06-event-loop-examples
- What allows node to perform non-blocking operations by offloading ops to the system kernel whenever possible
- Javascript is Synchronous and Single Threaded
  - It reads line by line, and does one thing and then the next
  - When developing for browser, we can use async methods like fetch, setTimeout to do a callback later
- The event loop allows us to take a request, register the CB to run when the task is complete, run immediate tasks, then execute the CB when there is no immediate task left
  - This works regardless of how long it takes to do the deffered task, as evident in the setTimeout example

# Events
## 08-basic-events 
- We're used to hadling events like button clicks in browser JS
- We're going to use events heavily in Node
- We can subscribe to events, then when they happen(when we emit them), we can do logic.
  - ORDER MATTERS
- Often we will not write our own events, but many built in modules rely on them
- http server methods are events driven!

# Streams 
## 09-basic-streams
- There are four types
  - Writable
  - Readable
  - Duplex
  - Transform
- Streams extend the EventEmitter class.

# Quick http review
- No files for this one, just instruction and review!
- Browser request review: we (the browser) send an HTTP request message, the server sends and HTTP response message.
- We're going to build servers with Node.
  - We'll also use the Express framework, because we don't want to build our server totally from scratch.
- HTTP messages structure:
  - URL
  - Method
    - GET, POST, PATCH, PUT, DELETE, etc
  - Status Code
    - 200s for good
    - 400s for bad
  - Remote address
  - Referrer Policy
  - Headers
    - Meta data, some will be taken care of, some we'll need to manage
  - Body
    - aka payload

# Express tutorial
- Quick review of http module which lets us set up a listening port and methods to recieve requests and send responses.
- How do we provide more info?
  - res.writeHead provides header info
    - status code, pass as int
    - content type, pass as key-value pairs
- We've talked a little bit about requests, they come in as big objects, and this is generaly familiar because we've built fetch requests and backend routes before in other frameworks.
  - Just copy paste here, we've already done routing basics in the http tut in the last section; we're just repeating to cover relation to the request object.
- Back to providing more/different info, we can serve static pages by building them as html files and then passing that HTML file and serving it as the content of a response.
  - Example showing how we could serve a whole site with just the http module, and how it can quickly become cluttered and lengthy, which is why we will be using Express.

# break
- pickup from https://www.youtube.com/watch?v=Oe421EPjeBE&t=17282s 
