var fs = require("fs");
/*
Meant to read file and return content
Input : Filename and format
Output : file content 
*/
class ReadSingleFile {
    getFileData(file,format) {
        try {
            return fs.readFileSync(file, format);
        } catch (e) {
            throw "Error in reading file "+e;
        }        
    }
}
module.exports = ReadSingleFile;