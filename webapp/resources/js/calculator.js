"use strict";
(function (global) {

var dc = {};

	
	dc.add = function(a1, a2) {
		return a1 + a2;
	}

global.$dc = dc;

})(window);

var addOne = function(a) {
	return a+1;
}

var add = function(a,b) {
	return a+b;
}