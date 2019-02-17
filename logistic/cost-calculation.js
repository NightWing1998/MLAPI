var hypothesis = require("./hypothesis");

function costCal(x, y, theta) {
	var m = y.length,
		J = 0
		h = hypothesis(x, theta),
		temp = 0;

	for (let j = 0; j < m; j++) {

		if( y[j] === 1 ){
			temp = -Math.log( h[j][0] );
		}else{
			temp = -Math.log( 1 - h[j][0] );
		}
		if(temp.toString() == "NaN"){
			throw new Error("cost cal J is not a number\ntemp: "+temp+" h: "+h+" x: " + x[j] + " y : " + y[j] + "j : " + j + "\n");
		}
		J += temp;
	}

	J = J/m;

	return J;

}

module.exports = costCal;