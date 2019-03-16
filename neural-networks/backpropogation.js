var gradientDescent	= require('./gradient-descent'),
	hypothesis		= require('./hypothesis'),
	cost			= require("./cost-calculation");

module.exports = function(x,y,hl,nodes,omega,b,learningRate){

	var h = null,
	jHistory = 0,
	j = -1,count = 0;
	while( jHistory !== j && j !== 0  && count < 200000 ){
		h = hypothesis(x,hl,omega,b);
		

		//TODO:- backpropogation logic here
		

		jHistory = j;
		j = cost(y,h);
		count++;
	};

	return {omega,b};

};