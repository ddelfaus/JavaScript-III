/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. First principle is Windows/Global Object binding. When "this" is in the global scope, it will be referring to the window/console object. Everything in javaScript are part of objects.

* 2.  Second principle is Implicit Binding. When "this" is part of a function inside an object it will call that object that is before the dot.

* 3.  Third principle is New binding. New binding is used with constructor function. The "this" is referring to the new object that is created.

* 4. Fourth principle is Explicit binding. When a javaScript call or apply is used "this" will refer to those methods.

* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function helloGlobal(name){
    console.log(this);
    return name;
}
helloGlobal("Hi World");


// Principle 2
// code example for Implicit Binding

const planets = {
    name: 'Earth',
    mass: '5.972 x 10^24 kg',
    radius: 3958.8 , // mi
    
    planetData:function(){
        console.log(`${this.name} has a mass of ${this.mass} and a radius of ${this.radius} mi`);
    }
};

planets.planetData();


// Principle 3

// code example for New Binding

function PeopleAdd(person){
        this.add = 'you have been added ',
        this.person = person,
        this.adder = function() {
            console.log(this.add + this.person);
          
        };
}
const dude1 = new PeopleAdd('Rob');
const dude2 = new PeopleAdd('Bob');

dude1.adder();
dude2.adder();

// Principle 4

// code example for Explicit Binding


dude1.adder.call(dude2);