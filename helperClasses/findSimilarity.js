const stringSimilarity = require('string-similarity');
/*
Meant to find best matched strings in array 
Input : <ARRAY>,<ARRAY>
Output : <ARRAY>
*/
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
module.exports = FindSimilarity;