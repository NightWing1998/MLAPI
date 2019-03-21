var MatrixOps   = require('../matrix-operations'),
    sigmoid     = require('./activationFunctions').sigmoid;

module.exports = function(x,hl,omega,b,activationFunc){
    var a = [],z = [];
    a[0] = x;
    z[0] = null;
    for(var  i = 1;i < hl+1;i++){
        z[i] = MatrixOps.MatrixMulti( a[i-1],MatrixOps.Transpose(omega[i-1]) );
        // console.log("%%%%%%%%",i,z[i].length,z[i][0].length,b[i].length);
        a[i] = activationFunc( z[i] );
        for(let j = 0;j<a[i].length;j++){
            a[i][j]= MatrixOps.Add( a[i][j],b[i-1] );
        }
    }
    z[hl+1] = MatrixOps.MatrixMulti( a[hl],MatrixOps.Transpose(omega[hl]) );
    // console.log("%%%%%%%%",hl+1,z[hl+1].length,z[hl+1][0].length,b[hl].length);
    a[hl+1] = sigmoid( z[hl+1] );
    for(let j = 0;j<a[hl+1].length;j++){
        a[hl+1][j]= MatrixOps.Add( a[i][j],b[i-1] );
    }
    // console.log(">>>>>>>>>>>>>>>>>",a);
    return {a,z};
}