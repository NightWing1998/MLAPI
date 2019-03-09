var MatrixOps   = require('../matrix-operations')
    // sigmoid     = require('./sigmoid');

module.exports = function(xOfn,yOfnLength,hl,nodes,omega,b){
    var h = [];
    var a = [];
    a[0] = [xOfn];
    for(var  i = 1;i < hl+1;i++){
        cal(i,nodes,a,omega,b);
        console.log(a[i]);
    }
    cal(hl+1,yOfnLength,a,omega,b);
    h = a[hl+1];
    console.log(">>>>>>>>>>>>>>>>>",h);
    return h;
}

function cal(i,extent,a,omega,b){
    a[i] = [];
    var z = [];
    for(var j = 0;j<extent;j++){
        // console.log(a[i-1],omega[i-1][j]);
        temp = MatrixOps.MatrixMulti(a[i-1],omega[i-1][j]);
        console.log("<<<<<<<<<<<<",temp,"\n?????????????",b[i-1][j]);
        z = temp[0][0] + b[i-1][j][0];
        // a[i][j] = sigmoid(z);
        a[i][j] = z;
    }
    // a[i] = sigmoid([ a[i] ]);
    a[i] = [ a[i] ];
}