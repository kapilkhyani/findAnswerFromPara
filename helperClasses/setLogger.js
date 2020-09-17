/*
Meant to read file and return content
Input : Filename and format
Output : file content 
*/
class SetLogger {
    outPutLog(message) {
        console.log(message);
        throw message;

    }
}
module.exports = SetLogger;