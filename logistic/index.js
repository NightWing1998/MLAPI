var fs 				= require('fs'),
	gradientDescent = require('./gradient-descent');

module.exports = function(path,learningRate,callback){
	// console.log(path);
	var alpha = learningRate;
	fs.readFile(path,function (err,data) {
		console.log("Reading input from ",path);
		if(err) throw err;	
		// console.log(data.toString());	
		data = data.toString();
		data = data.slice(1,data.length);
		// console.log(data);
		var x = [],y = [];
		// console.log( data.split('\n') );
		data = data.split('\n');
		for(let a = 0; a < data.length - 1;a++){
			// console.log(data[a]);
			x[a] = [];
			x[a][0] = 1;
			data[a] = data[a].slice(1,data[a].length-2);
			data[a] = data[a].split(",");
			for(let b = 0;b < data[a].length - 1 ;b++){
				x[a][b+1] = parseFloat(data[a][b]);
			}
			console.log(x[a]);
			y[a] = parseFloat(data[a][data[a].length-1]);
	
		}
		
		// console.log("Linear ",x[x.length-1],y[y.length-1],x.length,x[0].length,y.length );
		
		var theta = [];
		for(let a = 0;a<x[a].length ;a++){
			theta[a] = [];
			theta[a][0] = Math.random();
		}
		
		// console.log("Theta:- ",theta);
	
		theta = gradientDescent(x, y, theta, alpha);
		console.log("Optimal value of theta for current input:- ",theta);
		
		callback(theta);
	
	});
};