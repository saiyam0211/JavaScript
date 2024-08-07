console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);
console.log(null <= 0);
console.log(null == 0);
console.log(null != 0); // null is converted into 0 because of comparison

console.log(undefined == 0); // always give false
console.log(undefined > 0); // always give false
console.log(undefined < 0); // always give false

// "===" => strictly check with datatype also

console.log("2" === 2);
