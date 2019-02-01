console.log("stating project App1.js");

//File System
const fs = require('fs');

//OS (Operating System)
const os = require('os');

//Reference to constants.js file
const myConstants = require('./Constants.js');

//Reference to lodash
const _ = require('lodash');

let user = os.userInfo();
let string_username = user.username;

//For working with input params from the console
if(true){
    let userInput = process.argv[process.argv.length - 1];
    let lowercaseStr = userInput.toLowerCase();
    console.log("lowercaseStr == " + lowercaseStr);
    if(lowercaseStr === "add"){
        console.log("it equals add regardless of case, TRUE");
    } else {
        console.log("it does NOT equal add regardless of case, FALSE");
    }
}

//For using the lodash module
if(false){
    //Checks if the input value is a String
    console.log(_.isString(true));
    console.log(_.isString("a String"));

    var filteredArray = _.uniq(["A String", true, "A String", 1, 1, 2, 3, 4]);
    //Should be: "['A String', true, 1, 2, 3, 4]"
    console.log(filteredArray);
}

//Utilizing the myConstants variable
if(false){
    console.log(user);
    var res = myConstants.addNote("patpat", true);
    console.log(res);

    var addedNums = myConstants.addValues(10, -1);
    console.log("addedNums = " +  addedNums)
}

//File Writing
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
