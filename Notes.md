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


