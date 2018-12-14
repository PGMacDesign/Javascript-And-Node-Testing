// console.log("stating project App1.js");

const fs = require('fs');

//Synchronous method
fs.appendFileSync('pat_text.txt', 'This is some sample text');

//Asynchronous Method
fs.appendFile('pat_text.txt', 'This is some more sample text', function testName(err) {
    if(err){
        console.log("Unable to write file. /sadpanda");
    }
});
