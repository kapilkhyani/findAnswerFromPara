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
module.exports = ReadSingleFile;