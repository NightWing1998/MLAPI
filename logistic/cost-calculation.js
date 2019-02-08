var hypothesis = require("./hypothesis");

function costCal(x, y, theta) {
	var m = y.length,
		J = 0,
		// h = MatrixOps.MatrixMulti(x, theta);
		h = hypothesis(x, theta);

	for (let j = 0; j < m; j++) {
		J += ( -y[j]*Math.log( h[j][0] ) - ( 1-y[j] )*Math.log( 1 - h[j][0] ) );
	}

	J = J/m;

	return J;

}

module.exports = costCal;