var hypo 		= require("./hypothesis")
	// MatrixOps 	= require("../matrix-operations");

module.exports = function(x,y,hl,nodes,omega,b){
	var J = 0,h,temp = 0;
	for(var i = 0;i < x.length;i++){
		h = hypo(x[i],y[i].length,hl,nodes,omega,b);
		temp = 0;
		for(var j = 0;j<y[i].length;j++){
			temp+= Math.pow( h[0][j] - y[i][j],2 );
		}
		J+=temp;
	}
	J = J/y.length;
	return J;
}