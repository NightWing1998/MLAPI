var MatrixOps = require("./matrix-operations");

function costCal(x, y, theta) {
	var m = y.length,
		J = 0,
		h = MatrixOps.MatrixMulti(x, theta);

	for (let j = 0; j < m; j++) {
		J += (h[j][0] - y[j]) ** 2;
	}

	J = J / (2 * m);

	return J

}

module.exports = costCal;
