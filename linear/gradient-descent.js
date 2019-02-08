var costCal		= require("./cost-calculation"),
	hypothesis	= require("./hypothesis");

function gradientDescent(x, y, theta, alpha) {

	var count = 0,
		jHistory = 0,
		j = -1,
		m = y.length,
		sum = 0,
		h = [];
	
	
	// console.log("Inside gradient descent:- \ntheta:- ",theta);
	// console.log("Gradient descent");
	
	while (jHistory !== j && count < 200000) {

		sum = 0;
		// console.log(MatrixOps,MatrixOps.MatrixMulti);
		// h = MatrixOps.MatrixMulti(x, theta);
		h = hypothesis(x, theta);

		for (let a = 0; a < theta.length; a++) {

			for (let b = 0; b < m; b++) {
				sum += (h[b][0] - y[b])*x[b][a];
			}

			sum = alpha*sum/m;

			theta[a][0] = theta[a][0] - sum;
		}

		jHistory = j;

		j = costCal(x, y, theta);

		count++;

	}

	return theta;
}

module.exports = gradientDescent;