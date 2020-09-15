const { FindAnswer, ReadFileData } = require("./findAnswers");
const { exit } = require("process");


let dataParagraph = "";
let dataQuestions ="";
let dataAnswers = "";

// if files not given then default files will be picked up
try {
    const paragraphFileName = ( typeof(process.argv[2]) !== 'undefined') ? process.argv[2] : 'paragraph.txt';
    const questionsFileName = ( typeof(process.argv[3]) !== 'undefined') ? process.argv[3] : 'questions.txt';
    const answersFileName = ( typeof(process.argv[4]) !== 'undefined') ? process.argv[4] : 'answers.txt';
    
    const fileData = new ReadFileData([paragraphFileName,questionsFileName,answersFileName]);
    
    ([ dataParagraph, dataQuestions, dataAnswers ] = fileData.getFileData());
} catch (e) {
    console.log('Error Occured in file fetch '+e.message);
    exit();
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
