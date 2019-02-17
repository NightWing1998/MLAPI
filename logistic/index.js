var fs 				= require('fs'),
	gradientDescent = require('./gradient-descent');
	// costCalculation = require('./cost-calculation');

module.exports = function(path,learningRate){		//comment this out for testing
	// console.log(path);
	// fs.readFile('data.txt',function (err,data) {		//comment for deployment
	fs.readFile(path,function (err,data) {			//comment this out for testing
		// console.log("Reading input from ",path);		//comment this out for testing
		if(err) throw err;	
		// console.log(data.toString());	
		data = data.toString();
		// data = data.slice(1,data.length);
		// console.log(data);								//comment for deployment
		var x = [],y = [];
		// console.log( data.split('\n') );
		data = data.split('\n');
		for(let a = 0; a < data.length - 1;a++){
			// console.log(data[a]);
			x[a] = [];
			x[a][0] = 1;
			// data[a] = data[a].slice(1,data[a].length-2);
			data[a] = data[a].split(",");
			for(let b = 0;b < data[a].length - 1 ;b++){
				x[a][b+1] = parseFloat(data[a][b]);
			}
			// console.log(x[a]);
			y[a] = parseFloat(data[a][data[a].length-1]);
	
		}
		
		// console.log("logistic ",x[x.length-1],y[y.length-1],x.length,x[0].length,y.length );	//comment for deployemnt
		
		var theta = [];
		for(let a = 0;a<x[a].length ;a++){
			theta[a] = [];
			// theta[a][0] = 0;
			theta[a][0] = Math.random()/100;
		}

		// console.log("logistic ",x,y,theta );	//comment for deployemnt
		
		// console.log("Theta:- ",theta);
	
		// theta = gradientDescent(x, y, theta, learningRate);			//comment this out for testing
		theta = gradientDescent(x, y, theta, 0.005);					//comment this out for deployment
		// console.log( costCalculation(x,y,[[0],[0],[0]]) );
		// console.log("Optimal value of theta for current input:- ",theta);
		
		callback(theta);		//comment this out for testing
	
	});
};