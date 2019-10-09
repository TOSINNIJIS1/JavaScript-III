/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this can be global
* 2. this can be the owner
* 3. it can be undefined 
* 4. and can be confusing.
*
* write out a code example of each explanation above
*/

// Principle 1
function fullName(Fname, Lname){
	console.log(this);
	return Fname + Lname;
}
firstName("Vincent");
lastName("Adeniji");

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding