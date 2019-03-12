var hypo 		= require("./hypothesis")
	// MatrixOps 	= require("../matrix-operations");

module.exports = function(y,h){
	var J = 0;
	for(var i = 0;i < y.length;i++){
		temp = 0;
		for(var j = 0;j<y[i].length;j++){
			temp+= Math.pow( h[i][j] - y[i][j],2 );
		}
		J+=temp;
	}
	J = J/y.length;
	return J;
}