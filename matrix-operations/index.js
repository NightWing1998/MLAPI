var MatrixOperations = {

	MatrixMulti : function (matA, matB) {

		// console.log("Matrix entered");
		if (matA[0].length !== matB.length) {
			// console.log("DimensionError:Dimensions of matrices do not match");
			throw new Error("DimensionError:Dimensions of matrices do not match " + matA[0].length + matB.length);
		}
		var result = [], sum = 0;
		for (let a = 0; a < matA.length; a++) {
			result[a] = [];
			// console.log(a,result);
			for (let b = 0; b < matB[0].length; b++) {
				sum = 0;
				for (let c = 0; c < matA[0].length; c++) {
					// console.log(b,a,c,matA,matB,sum);
					sum += matA[a][c] * matB[c][b];
				}
				result[a][b] = sum;
				// console.log(result[a]);
			}
		}

		return result;

	}

};

module.exports = MatrixOperations;