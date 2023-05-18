//String//

// let s = new String("test")
let s = "test";
console.log(s)
//chartAt
console.log(s.charAt(1))

//conat
let b = s.concat(" conacting value with s")
console.log(b)

//replace
s = "welcome to javascript"
console.log(s.replace("javascript","java"))

//subString
console.log(s.substring(0,3))
console.log(s.substring(3,7))

//tolowerCase & toUpperCase
s = "WELcome"
console.log(s.toLowerCase())
console.log(s.toUpperCase())

//split
s = "welcome to javascript"
let arr = s.split(" ")
for (let one in arr) {
   console.log(arr[one]);
}


//trim
s = "    welcome"
console.log(s)
console.log(s.trim())


//Numbers//

let v = 100;
// let j = new Number(100);
let j = 51.27;
let l = "String";
let o = "1234";

//isInteger
console.log(Number.isInteger(v))

//parseInt - convert string in to number
console.log(Number.parseInt(o))

//toString
v = 100;
console.log(typeof(v));
console.log(typeof(Number.toString(v)));
