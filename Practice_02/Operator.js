let x = 50, y = 20;
//Arithmetic Operator
console.log(x+y);
console.log(x-y);
console.log(x/y);


x++
console.log(x);

let h = 100;
let m = 10;

//Assignment Operator
console.log(h=h+m); // h+=m;
console.log(h=h-m); //h-=m;
console.log(h=h*m); //h*=m;
console.log(h=h/m); //h/=m;

//Relational / comparison Operator
//Always return a boolean value
//< > <= >= !=

let j = 10;
let k = 20;

console.log(j<k); //true
console.log(j>k);  //false
console.log(j>=k);  //false
console.log(j<=k);  //true
console.log(j!=k); //true
console.log(j==k); //false


//termnary Operator
console.log(j<k ? j:k); //returns j value 10
console.log(k>j ? k:j);  //returns k value 20

//Logical Operators
// && || !

let a = true;
let b = true;

console.log(a && b);  //false 
console.log(a || b);  //true
console.log(!a);  //false
