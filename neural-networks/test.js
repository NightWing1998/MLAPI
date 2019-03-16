var x = [[1,1,1,1],[2,2,2,2]];
var w = [ [ [ 1,1,1,1] , [2,2,2,2] , [3,3,3,3] ],[  [1,0,0] , [0,1,0] , [0,0,1]  ],[  [1,1,1] , [1,1,-1] ] ]
var b = [ [ 0,0,0 ], [0,0,0] , [0,0]  ]
var hypo = require("./hypothesis");
var  h = hypo(x,2,w,b)[3];
var cost = require("./cost-calculation");
var y = [[24,0],[48,0]]
function linear(x){
	return x;
}
console.log("@@@@@@@@@@@@@@@@",cost(y,h));