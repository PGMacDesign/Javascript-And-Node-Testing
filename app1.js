// console.log("stating project App1.js");

//File System
const fs = require('fs');

//OS (Operating System)
const os = require('os');

//Reference to constants.js file
const myConstants = require('./Constants.js');

var user = os.userInfo();
var string_username = user.username;

if(false){
    console.log(user);
}

var res = myConstants.addNote("patpat", true);
console.log(res);

var addedNums = myConstants.addValues(10, -1);
console.log("addedNums = " +  addedNums)

if(false){
    //Synchronous method
    fs.appendFileSync('pat_text.txt', 'Hi ' + string_username + "!" + "\n"
    + ". This program belongs to " + myConstants.fName + " "
    + myConstants.lName + " who is "
    + myConstants.age + " years old.");

    if(false){
        //Asynchronous Method
        fs.appendFile('pat_text.txt', 'Hi ' + string_username + "!" + "\n", function testName(err) {
            if(err){
                console.log("Unable to write file. /sadpanda");
            }
        });
    }
}
