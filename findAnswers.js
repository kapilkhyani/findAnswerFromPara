const FindSimilarity = require('./helperClasses/findSimilarity');
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
        var answersFinal = [];

        // ---------------------- OLD APPROACH ---------------------
        // dataQuestions.map((ques, index) => {
        //     var a = stringSimilarity.findBestMatch(ques,dataParagraph);
        //     answers[index] = a.ratings[a.bestMatchIndex].target;
        // })
        
        // answers.map((ans, index) => {
        //     var a = stringSimilarity.findBestMatch(ans,dataAnswers);
        //     answersFinal[index] = a.ratings[a.bestMatchIndex].target;
        // })
        // ---------------------- OLD APPROACH ---------------------

        // ---------------------- NEW APPROACH ---------------------
        // Finding similarity between questions and paragraph sentences
        let setSimilarityObject = new FindSimilarity(dataQuestions, dataParagraph);
        let firstSetAnswers = setSimilarityObject.getSimilarity();

        setSimilarityObject.input1 = firstSetAnswers;
        setSimilarityObject.input2 = dataAnswers;

        // Finding similarity between jumbled answers and similar answers
        answersFinal = setSimilarityObject.getSimilarity();
        // ---------------------- NEW APPROACH ---------------------

        return answersFinal;
    }
}

module.exports.FindAnswer = FindAnswer;