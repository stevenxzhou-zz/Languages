// Wrap the function as IIFE to return A at last. 
// It will make sure all the hoisting is done before making a call to A, which also serves as a entry point.
(function(global){

	function C() {
		console.log("OOPS!");
	}

	function E(f) {
		console.log("E");
		// the f is passed by D, which is not a empty argument, it is already declared it is equivalent as var f = F;.
		f();
		// The line below happens after f gets called which is a no-op.
		var f = F;
	}

	var A = function() {
		console.log("A");
		B();
	};

	var C;

	function G() {
		console.log("G");
		H();
		// We can conver the var H = function() to following so that it can be hoisted and make sure it is ready to be called for the line above.
		function H() {
			console.log("H");
			I();
		}
	}

	var D = d;

	function d() {
		console.log("D");
		// Pass in the F, so that as it will become an argument of E, it will serve as a declared value.
		E(F);
	}

	function I() {
		console.log("I");
		J();
		J();
	}

	B = function() {
		console.log("B");
		C();
	};

	var F = function() {
		console.log("F");
		G();
	};

	// define a fns so to avoid creating too many global variables which could occupy too much unnecessary namespace.
	var rest = "KLMNOPQRSTUVWXYZ".split(""), fns = {};
	for (var i=0; i<rest.length; i++) {
		(function(i){
			// define the current function
			fns[rest[i]] = function() {
				console.log(rest[i]);
				if (i < (rest.length-1)) {
					fns[rest[i+1]]();
				}
			};
		})(i);
	}

	// This is weird, but it J got assiged to itself, we can call the inner function by falling J twice.
	// 1. Assign 2. Call.
	var J = function() {
		J = function() {
			console.log("J");
			fns.K();
		};
	};

	// Since we call A at last, though we defined C pretty early, it got overrided by the function below.
	function C() {
		console.log("C");
		D();
	}

	return A;

})(window)();
