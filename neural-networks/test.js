var x = [[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]];
var w = [ [ [ 1,1,1,1] , [2,2,2,2] , [3,3,3,2] ],[  [1,0,0] , [0,1,0] , [0,0,1]  ],[  [1,1,1] , [1,1,-1] ] ]
var b = [ [ 0,0,0 ], [0,0,0] , [0,0]  ]
var hypo = require("./hypothesis");
var cost = require("./cost-calculation");
var y = [ [ 0.9999999999622486, 0.5 ],
[ 1, 0.5 ],
[ 0.9999999999622486, 0.5 ],
[ 1, 0.5 ] ];
ReLU        = require("./activationFunctions").ReLU,
deriReLU    = require("./derivativeOfactivation").ReLU;
var backpropogation = require("./backpropogation");
// console.log(hypo(x,2,w,b,ReLU).a[3]);
backpropogation(x,y,2,w,b,ReLU,deriReLU,0.005);
console.log("w:",w,"\n\n\n b: ",b);
var h = hypo(x,2,w,b,ReLU).a[3];
console.log("@@@@@@@@@@@@@@@@",cost(y,h));