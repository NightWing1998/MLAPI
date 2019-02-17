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
		
		h = hypothesis(x, theta);

		// console.log("jHistory: ",jHistory," j: ",j,count);	//comment out for deployment

		for (let a = 0; a < theta.length; a++) {

			for (let b = 0; b < m; b++) {
				sum += (h[b][0] - y[b])*x[b][a];
			}

			sum = alpha*sum/m;

			theta[a][0] = theta[a][0] - sum;
		}

		jHistory = j;

		j = costCal(x, y, theta);
		if( j.toString() == "NaN" ){
			throw new Error("j is not a number\nh: " + h + " count = " + count + " j: " + j + "\n");
		}

		count++;

	}
	// console.log("count:- ",count,"j:- ",j);
	return theta;
}

module.exports = gradientDescent;