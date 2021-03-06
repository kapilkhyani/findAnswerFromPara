## Find Answers from Paragraph
### Pre-requirements 

- Node v12.18.3

### Commands

- yarn 
- node index.js



## SOLID PRINCIPLES 

* Each class has a single responsibility 

```
var fs = require("fs");
/*
Meant to read file and return content
Input : Filename and format
Output : file content 
*/
class ReadSingleFile {
    getFileData(fileData, logger) {
        let { file,format } = fileData;
        try {
            return fs.readFileSync(file, format);
        } catch (e) {
            logger.outPutLog('Error in reading file <'+file+'> '+e);
        }        
    }
}

class FindSimilarity {
    constructor(input1,input2) {
        this.input1 = input1;
        this.input2 = input2;
    }

    getSimilarity() {
        let match = [];
        try {
            this.input1.map((ques, index) => {
                var a = stringSimilarity.findBestMatch(ques,this.input2);
                match[index] = a.ratings[a.bestMatchIndex].target;
            });
            return match;   
        } catch (e) {
            throw "Inputs not in correct format "+e.message;
        }

    }
}

```

* classes are closed for modification but could be extended
```
var fs = require("fs");
/*
Meant to read file and return content
Input : Filename and format
Output : file content 
*/
class ReadSingleFile {
    getFileData(fileData) {
        let { file,format } = fileData;
        try {
            return fs.readFileSync(file, format);
        } catch (e) {
            throw "Error in reading file "+e;
        }        
    }
}
```

* Dependency Injection

```
readFile is High level component but not dependent on low level logger component
Logger object is passed as variable

class ReadSingleFile {
    getFileData(fileData, logger) {
        let { file,format } = fileData;
        try {
            return fs.readFileSync(file, format);
        } catch (e) {
            logger.outPutLog('Error in reading file <'+file+'> '+e);
        }        
    }
}

```

## YAGNI
* None of the class calls or requries any extra function / module
* Modules called upon need basis inside speicific classes 

```
const ReadSingleFile = require('./readFile'); 
    Inside readfile.js

const stringSimilarity = require('string-similarity');
    Inside find similarity class
```
[![Run on Repl.it](https://repl.it/badge/github/kapilkhyani/findAnswerFromPara)](https://repl.it/github/kapilkhyani/findAnswerFromPara)
