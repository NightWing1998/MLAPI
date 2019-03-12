var MatrixOps   = require('../matrix-operations')
    // sigmoid     = require('./sigmoid');

module.exports = function(x,hl,omega,b){
    var a = [];
    a[0] = x;
    for(var  i = 1;i <= hl+1;i++){
        a[i] = MatrixOps.MatrixMulti( a[i-1],MatrixOps.Transpose(omega[i-1]) ) ;
        for(let j = 0;j<a[i].length;j++){
            a[i][j]= MatrixOps.Add( a[i][j],b[i-1] );
        }
    }
    h = a[hl+1];
    // console.log(">>>>>>>>>>>>>>>>>",a);
    return a;
}