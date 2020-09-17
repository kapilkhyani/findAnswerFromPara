const ReadSingleFile = require('./readFile');
/*
Meant to read provided data files 
Input : Array [file path (String)]
*/
class FetchInputFiles extends ReadSingleFile{
    constructor(files) {
        super();
        this.files = files;
        
    }

    getProjectFileData() {
        let data = [];
        this.files.map((file) => {
            data.push(this.getFileData({file, format: "utf8"}));
        });
        return data;
    }
}
module.exports = FetchInputFiles;