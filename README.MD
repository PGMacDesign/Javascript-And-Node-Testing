
# Overview

This is a sample project that loosely follows the tutorial listed here - https://www.udemy.com/the-complete-nodejs-developer-course-2/

I say loosely as I will probably augment it quite a bit with other things as I go.

# Contents

## NPM 
	
Node Package Manager for the various libraries / dependencies used and their respective info listed below.

NPM General Info - The node_modules folder can be added to the .gitignore as it is generated code. To add it back in, simply use <b>"npm install"</b> @ the terminal and it will re-generate the code


<!-------- /br -------------->


### Nodemon

#### Link
https://nodemon.io/

#### Purpose
Used to auto restart project once changes are detected to avoid having it be run constantly from command line. 

#### Install Command:

```
npm install nodemon -g
```

#### Notes:
The "-g" argument is short for "Global" and installs as a global utility on the machine itself as opposed to your project (run it from terminal)

To run the application / script with Nodemon, use this command:

```
nodemon app1.js
```

To kill the nodemon running, use:

'Ctrl + C'



<!-------- /br -------------->


### Lodash

#### Link 

https://lodash.com/
            
#### Purpose 

This is used for various utility methods

#### Install Command

```
npm install lodash --save
```

#### Docs  
https://lodash.com/docs/4.17.11

#### Notes:
The "--save" argument in the install command saves it to the package.json file and incorporates it in there automatically. (Under dependencies)

Most of the time people utilize an underscore to reference the variable. Sample:

```Javascript
//Reference to lodash
const _ = require('lodash');

//To use:
console.log(_.isString(true));
console.log(_.isString("a String"));
```


<!-------- /br -------------->



### TBD


