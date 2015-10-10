
for (var i = 0; i < 10; i++)
{
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}
/*


- What will the effect and output of this script be?
		
		
		The loop will increment i up to ten, then call the setTimeout functions.
		The script will output "10" once every second for ten seconds

- What did the developer probably intend it to output?
	
	The developer was probably trying to count-up from zero
	to ten, incrementing every second.
	
- Why does it not do this?
	
	The thread that calls each setTimeout must complete before the first setTimeout is executed.
	



- How could you fix it to do that?

	Three Ways:
		
		Call setTimeout within an IIFE, this way the value of i is passed to the setTimeout
		function during each loop iteration.

		for (var i = 1; i < 10; i++) {
		    (function (i) {
		        setTimeout(function () {
		            console.log(i);
		        }, i * 1000);
		    })(i);
		}
		
		Move the setTimeout function outside of the for loop's scope, therefore creating individual copies
		of i.

		function run(i) {
		    setTimeout(function () {
		        console.log(i);
		    }, i * 1000);
		}
		for (var i = 1; i < 10; i++) {
		    run(i);
		}

		Use ECMAScript 2015's (ES6) new let statement to declare block scope:

		"use strict"; // required for chrome

	    for (var i = 0; i < 10; i++) {
	        
	        let x = i;
	        
	        setTimeout(function () {
	            console.log(x);
	        }, x * 1000);
	    }

		







