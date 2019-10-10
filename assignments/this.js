/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
* 2. Implicit
* 3. Explicit
* 4. New Binding
*
* write out a code example of each explanation above
*/

// Principle 1
function fullName(Fname, Lname){
	console.log(this);
	return Fname + Lname;
}
fullName("Vincent ", "Adeniji");

// code example for Window Binding

// Principle 2
const login = {
  userName: 'Vincent007',
	userId: function() {
    console.log(`enter username here ${this.userName}`);
	}
};
login.userId();
// code example for Implicit Binding

// Principle 3

const me = function(name, age, school){
  this.name = name;
  this.age = age;
  this.school = school;
};
const Vincent = new me('Vincent', 22, 'Lambda')
console.log(Vincent);

// code example for New Binding

// Principle 4

const ID = {
  idNum: '4323234',
  name: 'Vincent',
  age: 22,
  school: 'lambda',
  sayIdNum: function(){
    console.log(this.idNum)
  },
  course: 'Fullstack Webdev',
  fee: 'Zero down'
}
const school = function(){
  console.log(`my name is ${this.name}, I'm studying ${this.course} at ${this.school} with ${this.fee} tution payment`);
}
school.call(ID);


// code example for Explicit Binding