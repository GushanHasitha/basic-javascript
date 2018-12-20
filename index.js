/*
where does javascript code run? 
    in browsers, in every browser there is a javascript engine. javascript engine can excute javascript code.
    as examples fire box -> SpiderMonkey, chrome -> v8

    in node. node is a program which opensource javascript engine in chrome and embedded it inside c++ program

    browsers and node provide runtime environment for javascript code

Javascript vs ECMAScript?
    ECMAScript is a specification 

    Javascript is a programming language that confirms this specification

live server - is a very light weight web server that we are going to serve our web application

javascript variables
    cannot be reserved key word
    should be meaningful
    cannot start with a number (1name)
    cannot contain a space or hypen (-)
    are case sensitive

what are the kind of values that can assign for a variable?
    there are two categories of types in javascript
        1. primitives / value types
        2. reference types
*/

//primitives
let name = "gushan"; // string literal
let age = 25; // number literal
let isApproved = false; // boolean literal
let firstName; // undefined
let lastName = undefined;
let selectedColor = null;

/* 
javascript is a dynamic language
*/

console.log(typeof name);
console.log(typeof age);
age = 30.5;
console.log(typeof age);

/*
in javascript don't have two kind of numbers (floating point numbers and integers)

typeof selectedColor is object

reference types
    1.object
    2.array
    3.function
*/

//object 

//let person = {}; object literal 

// within this curly braces we add one or more key value pairs, keys are what we call properties of object
    
let person = {
    name: 'gushan',
    age: 25
}

//dot notation
person.name = 'hasitha';

//bracket notation
person['name'] = 'jayaweera';
console.log(person);

//arrays

// let selectedColors = []; array literal

let selectedColors = ['red', 'green'];

//in javascript we can store different types in array

selectedColors[2] = 1;
console.log(selectedColors);

//array is an object in javascript

//functions

function greet(name) {
    console.log('Hello ' + name);
}

greet('gushan'); //gushan is an agument to greet function name is a parameter of the greet function