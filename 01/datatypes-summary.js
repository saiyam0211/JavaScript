// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Primitive types are immutable, meaning they cannot be changed once created.
// They are also passed by value, meaning a copy of the value is passed to a function,
// rather than a reference to the original value.

// Reference ( non primitve )

// Array, Objects, Functions
// Reference types are mutable, meaning they can be changed once created.
// They are also passed by reference, meaning a reference to the original value is passed to a function

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  studentName: "saiyam",
  age: 17,
  skills: ["coding", "gaming", "reading"],
};

const myFunction = function () {
  console.log("Hello, I am a function");
};

console.log(typeof heros);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/
