var Matrix			= require('../matrix-operations'),
	hypothesis		= require('./hypothesis'),
	cost			= require("./cost-calculation");

module.exports = function(x,y,hl,nodes,omega,b,activatFunc,derivativeFunc,learningRate){

	var a = null,z = null,
	jHistory = 0,
	j = -1,count = 0;
	var dz = [],dW = [],db = [];
	while( jHistory !== j && j !== 0  && count < 200000 ){
		a = hypothesis(x,hl,omega,b,activatFunc);
		// console.log(a);
		z = a.z;
		a = a.a;
		//TODO:- backpropogation logic here
		dz[hl] = Matrix.Sub(a[hl+1],y);
		console.log("<<<<<<<<<<",dz[hl].length,dz[hl][0].length);
		for(let i = hl;i > 0;i--){
			console.log(">>>>>>>>>>",i);
			dW[i] =  Matrix.ScalarMultiply( 1/x.length,Matrix.MatrixMulti( dz[i],a[i] ) );
			omega[i] = Matrix.Sub(omega[i],Matrix.ScalarMultiply(learningRate,dW[i]));
			// console.log("<<<<<<<<<<",dW[i].length,dW[i][0].length);
			// dW[i] = dW[i]/x.length;
			db[i] = [];
			for(let j = 0;j<dz[i].length;j++){
				db[i][j] = Matrix.Sum(dz[i][j])/x.length;
				b[i][j] = b[i][j] - learningRate*db[i][j];
			}

			dz[i-1] = Matrix.MultiplyElementWise( Matrix.MatrixMulti( Matrix.Transpose(dW[i]),dz[i] ) , derivativeFunc(z[i-1]) )
		}

		jHistory = j;
		j = cost(y,h);
		count++;
	};

	return {omega,b};

};