var x = [[1,1,1,1],[2,2,2,2]];
var w = [ [ [ 1,1,1,1] , [2,2,2,2] , [3,3,3,3] ],[  [1,0,0] , [0,1,0] , [0,0,1]  ],[  [1,1,1] , [1,1,-1] ] ]
var b = [ [ [0,0,0] ],[ [0,0,0] ],[ [0,0] ] ]
var hypo = require("./hypothesis");
hypo(x,2,2,3,w,b);