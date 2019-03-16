var assert = require('assert');

module.exports = function(matrix){
    assert(matrix.length > 0 && matrix[0].length > 0,"Dimension error. Please check the dimensions of input matrix!! " + matrix.length + " " + matrix[0].length);
    var sigValue = [];
    for(let i = 0;i<matrix.length;i++){
        sigValue[i] = []; 
        for(let j = 0;j<matrix[0].length;j++){
            sigValue = Math.max(0,matrix[i][j]);
        }
    }
    
    return sigValue;
};