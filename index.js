const { FindAnswer } = require("./findAnswers");
const FetchInputFiles = require("./helperClasses/fetchInputFiles");

let dataParagraph = "";
let dataQuestions ="";
let dataAnswers = "";

// if files not given then default files will be picked up
try {
    const paragraphFileName = ( typeof(process.argv[2]) !== 'undefined') ? process.argv[2] : 'inputFiles/paragraph.txt';
    const questionsFileName = ( typeof(process.argv[3]) !== 'undefined') ? process.argv[3] : 'inputFiles/questions.txt';
    const answersFileName = ( typeof(process.argv[4]) !== 'undefined') ? process.argv[4] : 'inputFiles/answers.txt';
    
    const fileData = new FetchInputFiles([paragraphFileName,questionsFileName,answersFileName]);
    
    ([ dataParagraph, dataQuestions, dataAnswers ] = fileData.getProjectFileData());
} catch (e) {
    throw 'Error Occured in file fetch '+e.message;
}

dataParagraph = dataParagraph.split(".");
dataQuestions = dataQuestions.split("\n");
dataAnswers = dataAnswers.split(";");

let finalAnswer = new FindAnswer({dataParagraph, dataQuestions, dataAnswers});
finalAnswer = finalAnswer.getAnswer();



//Final output displayed
console.log('Output is ')
finalAnswer.map((e) => {
    console.log(e);
})
