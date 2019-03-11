var MatrixOperations = {

	MatrixMulti : function (matA, matB) {

		// console.log("Matrix entered");
		if (matA[0].length !== matB.length) {
			// console.log("DimensionError:Dimensions of matrices do not match");
			throw new Error("DimensionError:Dimensions of matrices do not match " + matA.length + "x" + matA[0].length + " " + matB.length + "x" + matB[0].length);
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

	},

	Transpose : function(og){
		t = [];
		for (let i = 0; i < og[0].length; i++) {
			t[i] = [];
			for(let j = 0;j < og.length;j++){
				t[i][j] = og[j][i];
			}
		}
		return t;
	},

	Add : function(matA,matB){
		
		if(matA.length !== matB.length){
			throw new Error("DimensionError:Dimensions of matrices do not match " + matA.length + " " + matB.length);
		}
		var result = [];
		if( matA[0].length !== undefined && matB[0].length !== undefined ){
			if(matA[0].length !== matB[0].length){
				throw new Error("DimensionError:Dimensions of matrices do not match " + matA.length + "x" + matA[0].length + " " + matB.length + "x" + matB[0].length);
			}
			for(let i = 0;i<matA.length;i++){
				result[i] = [];
				for(let j = 0; j < matA[0].length;j++){
					result[i][j] = matA[i][j] + matB[i][j]
				}
			}
		} else if( matA[0].length === undefined && matB[0].length === undefined ){
			for(let i = 0;i<matA.length;i++){
				result[i] = [];
				result[i] = matA[i] + matB[i];
			}
		}else{
			throw new Error("Dimension Error");
		}
		return result;
	}

};

module.exports = MatrixOperations;