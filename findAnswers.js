var fs = require("fs");
const stringSimilarity = require('string-similarity');

/*
Meant to find correct answers from data  
Input : Array [(Object)]
*/
class FindAnswer {
    constructor(data) {
        this.data = data;
    }

    getAnswer() {
        const {dataParagraph, dataQuestions, dataAnswers} = this.data;
        var answers = [];
        var answersFinal = [];
        dataQuestions.map((ques, index) => {
            var a = stringSimilarity.findBestMatch(ques,dataParagraph);
            answers[index] = a.ratings[a.bestMatchIndex].target;
        })

        answers.map((ans, index) => {
            var a = stringSimilarity.findBestMatch(ans,dataAnswers);
            answersFinal[index] = a.ratings[a.bestMatchIndex].target;
        })

        return answersFinal;
    }
}

/*
Meant to read provided data files 
Input : Array [file path (String)]
*/
class ReadFileData {
    constructor(files) {
        this.files = files;
        
    }

    getFileData() {
        let data = [];
        this.files.map((file) => {
            return data.push(fs.readFileSync(file, "utf8"));
        });
        return data;
    }
}
module.exports.FindAnswer = FindAnswer;
module.exports.ReadFileData = ReadFileData;