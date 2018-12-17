// console.log("stating project App1.js");

//File System
const fs = require('fs');

//OS (Operating System)
const os = require('os');

//Reference to constants.js file
const myConstants = require('./Constants.js');

//Reference to lodash
const _ = require('lodash');

var user = os.userInfo();
var string_username = user.username;


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
