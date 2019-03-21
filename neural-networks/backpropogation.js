var Matrix = require('../matrix-operations'),
	hypothesis = require('./hypothesis'),
	cost = require("./cost-calculation");

module.exports = function (x, y, hl, omega, b, activatFunc, derivativeFunc, learningRate) {

	var a = null, z = null,
		jHistory = 0,
		j = -1, count = 0;
	var dz = [], dW = [], db = [];
	a = hypothesis(x, hl, omega, b, activatFunc).a;
	j = cost(y,a[hl+1]);
	while (jHistory !== j && j !== 0 && count < 200000) {
		// console.log("count: ", count);
		a = hypothesis(x, hl, omega, b, activatFunc);
		// console.log(a);
		z = a.z;
		a = a.a;
		//TODO:- backpropogation logic here
		dz[hl + 1] = Matrix.Sub(a[hl + 1], y);
		for (let i = hl; i > 0; i--) {
			dW[i] = Matrix.ScalarMultiply(1 / x.length, Matrix.MatrixMulti(Matrix.Transpose(dz[i + 1]), a[i]));
			omega[i] = Matrix.Sub(omega[i], Matrix.ScalarMultiply(learningRate, dW[i]));
			db[i] = [];
			// for(let j = 0;j<b[i].length;j++){
			// 	db[i][j] = Matrix.Sum(dz[i+1][j])/x.length;
			// 	b[i][j] = b[i][j] - learningRate*db[i][j];
			// }
			let s = Matrix.Sum(dz[i + 1]) / x.length;
			b[i] = Matrix.ScalarAdd(learningRate * s, b[i]);
			dz[i] = Matrix.MultiplyElementWise(Matrix.MatrixMulti(dz[i + 1], dW[i]), derivativeFunc(z[i]));
		}

		// FOR I = 0 SINCE LAST STEP IS NOT TO BE PERFORMED]
		dW[0] = Matrix.ScalarMultiply(1 / x.length, Matrix.MatrixMulti(Matrix.Transpose(dz[0 + 1]), a[0]));
		omega[0] = Matrix.Sub(omega[0], Matrix.ScalarMultiply(learningRate, dW[0]));
		db[0] = [];
		// for(let j = 0;j<b[i].length;j++){
		// 	db[i][j] = Matrix.Sum(dz[i+1][j])/x.length;
		// 	b[i][j] = b[i][j] - learningRate*db[i][j];
		// }
		let s = Matrix.Sum(dz[0 + 1]) / x.length;
		b[0] = Matrix.ScalarAdd(learningRate * s, b[0]);

		jHistory = j;
		j = cost(y, a[hl + 1]);
		count++;
	};
	// console.log("returned");
	return { omega, b };

};