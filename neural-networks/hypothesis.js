var MatrixOps   = require('../matrix-operations'),
    sigmoid     = require('./sigmoid');

module.exports = function(x,hl,omega,b,activationFunc){
    var a = [];
    a[0] = x;
    for(var  i = 1;i < hl+1;i++){
        a[i] = activationFunc( MatrixOps.MatrixMulti( a[i-1],MatrixOps.Transpose(omega[i-1]) ) );
        for(let j = 0;j<a[i].length;j++){
            a[i][j]= MatrixOps.Add( a[i][j],b[i-1] );
        }
    }
    a[hl+1] = sigmoid( MatrixOps.MatrixMulti( a[hl],MatrixOps.Transpose(omega[hl]) ) );
    for(let j = 0;j<a[hl+1].length;j++){
        a[hl+1][j]= MatrixOps.Add( a[i][j],b[i-1] );
    }
    // console.log(">>>>>>>>>>>>>>>>>",a);
    return a;
}