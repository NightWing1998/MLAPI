var fs 				= require('fs')
	// gradientDescent = require('./gradient-descent');
	// costCalculation = require('./cost-calculation');

module.exports = function(path,hidden_layers,no_of_nodes,learningRate){		//comment this out for testing
	// console.log(path);
	var hl = hidden_layers,nodes=no_of_nodes;
	fs.readFile('data.txt',function (err,data) {		//comment for deployment
	// fs.readFile(path,function (err,data) {			//comment this out for testing
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
			// data[a] = data[a].slice(1,data[a].length-2);
			data[a] = data[a].split(",");
			for(let b = 0;b < data[a].length - 1 ;b++){
				x[a][b] = parseFloat(data[a][b]);
			}
			// console.log(x[a]);
			y[a] = [parseFloat(data[a][data[a].length-1])];
	
		}
		
		// console.log("neural ",x[x.length-1],y[y.length-1],x.length,x[0].length,y.length );	//comment for deployemnt
		
		var omega = [],b = [];
		for(var i = 0;i<=hl;i++){
			var limit = 0,cur_nodes = 0;
			omega[i] = [];
			b[i] = [];
			if(i === hl){
				// omega[hl] sould have elements of upto y.length
				limit = y[0].length;
			}else{
				limit = nodes;
			}
			// limit = (i === hl)?y.length:nodes;
			for(let j = 0;j < limit;j++){
				omega[i][j] = [];
				b[i][j] = 1;
				if( i === 0 ){
					cur_nodes = x[0].length;
				} else{
					cur_nodes = nodes;
				}
				for(let k = 0;k < cur_nodes;k++){
					omega[i][j][k] = Math.random();
				}
			}
		}
		// theta[a][0] = Math.random();

		// console.log("neural\n>>>>>>>>>\n",x,"\n<<<<<<<<<<<\n",y,"\n#############\n",omega,"\n???????????\n",b );	//comment for deployemnt
		
		// console.log("omega lengths: ",omega.length,omega[0].length,omega[0][0].length);
		// console.log("Theta:- ",theta);
	
		// theta = backpropogation(x, y, theta, learningRate);			//comment this out for testing
		// theta = backpropogation(x,y,theta,0.05)						//comment this out for deployment
		// console.log("Optimal value of theta for current input:- ",omega,b);
		
		// callback(omega,b);		//comment this out for testing
	
	});
};