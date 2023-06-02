const fs = require('fs')

const textIn = fs.readFileSync('./input.txt', 'utf-8');

console.log(textIn)

const textOut = `This is we know about the avocado (Don't ask much about it): ${textIn}. /n Created on ${Date.now()}`

fs.writeFileSync('./output.txt', textOut)

console.log("File Written")

