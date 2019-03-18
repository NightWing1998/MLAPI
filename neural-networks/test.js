var x = [[1,1,1,1],[2,2,2,2]];
var w = [ [ [ 1,1,1,1] , [2,2,2,2] , [3,3,3,3] ],[  [1,0,0] , [0,1,0] , [0,0,1]  ],[  [1,1,1] , [1,1,-1] ] ]
var b = [ [ 0,0,0 ], [0,0,0] , [0,0]  ]
var hypo = require("./hypothesis");
// var  h = hypo(x,2,w,b)[3];
var cost = require("./cost-calculation");
var y = [[3.7751345441365816e-11,0],[1.4251640827409352e-21,0]],
ReLU        = require("./activationFunctions").ReLU,
deriReLU    = require("./derivativeOfactivation").ReLU;
var backpropogation = require("./backpropogation");
// console.log(ReLU);
backpropogation(x,y,2,3,w,b,ReLU,deriReLU,0.005);
backpropogation()
// console.log("@@@@@@@@@@@@@@@@",cost(y,h));