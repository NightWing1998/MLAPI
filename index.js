var fs 				= require('fs'),
	alpha 			= 0.01,
	MatrixOps 		= require("./matrix-operations"),
	gradientDescent = require('./gradient-descent'),
	costCal			= require("./cost-calculation");

fs.readFile('data.txt',function (err,data) {
	console.log("Reading input from 'data.txt'");
	if(err) console.log(err);	
	// console.log(x.toString());	
	data = data.toString();
	var x = [],y = [];
	// console.log( data.split('\n') );
	data = data.split('\n');
	for(let a = 0; a < data.length - 1;a++){
		// console.log(data[a]);
		x[a] = [];
		x[a][0] = 1;
		for(let b = 0;b < data[a].length - 1;b++){
			x[a][b+1] = parseFloat(data[a].split(",")[b]);
		};
		y[a] = parseFloat(data[a].split(",")[this.length-1]);

	}
	
	var theta = [[0],[0]];
	
	console.log("Cost when theta = [[-1],[2]] :- ",costCal(x,y,[[-1],[2]]));

	theta = gradientDescent(x, y, theta, alpha);
	console.log("Optimal value of theta for current input:- ",theta);

	console.log("Predictions:- ");
	console.log("y(x = 35,000) = ",MatrixOps.MatrixMulti([[1,3.5]],theta)*1000);
	console.log("y(x = 70,000) = ",MatrixOps.MatrixMulti([[1,7]],theta)*1000);

});