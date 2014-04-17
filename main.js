/* 1. Rewrite the pluralize function using the ternary operator:

var pluralize = function (word, number) {
 if(number === 1) {
  return word;
 }
 else {
  return word + "s";
 }
};
*/

var pluralize = function(word, number) {
	return number === 1 ? word : word + "s";
}



/* 2. Rewrite the following code to be more functional:

var victim = {};

var getVictimInfo = function() {
 victim.name = prompt("Please enter your name:");
 victim.phone = prompt("Please enter your phone number:");
 victim.street = prompt("Please enter your street:");
};

getVictimInfo();

alert('Thank you! Victim entered: \n' +
 victim.name + ", " +
 victim.phone + ", " +
 victim.street);
 */

 

 /* 3. Write a function which removes falsey values from an array.
  A falsey value is one which evaluates to false when type coerced,
  which are the following:

  	0, null, "" (empty string), undefined, NaN, false.

  Write two versions of the function: one that uses side effects and one that is pure.
  */


var removeFalseyPure = function(arr) {
	var newArr = [];
	for(var i=0; i<arr.length; i++) {
		if(Boolean(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}














