var MatrixOps   = require('../matrix-operations'),
    sigmoid     = require('./sigmoid');

module.exports = function(x,theta){
    return sigmoid( MatrixOps.MatrixMulti(x,theta) );
}