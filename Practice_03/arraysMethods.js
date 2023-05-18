let car = ["benc","bmw","vitz"]
console.log("---print array values as string---\n")
console.log(car.toString());  //benz,bmw,vitz
//or
console.log(car.join("*")); //benz*bmw*vitz

console.log("---print array withiout last value---\n")
//pop
console.log(car.pop());
console.log(car)

console.log("---print adding new value as last index---\n")
//push
car = ["benc","bmw","vitz",45];
console.log(car.push("test"));
console.log(car)

console.log("---removing first element from array---\n")
car = ["benc","bmw","vitz",45];
console.log(car.shift());
console.log(car);

console.log("---adding first element to array---\n")
car = ["benc","bmw","vitz",45];
console.log(car.unshift(9))
console.log(car);


console.log("---deleting element from array---\n")
car = ["benc","bmw","vitz",45];
delete car[0]
console.log(car)

console.log("---merging 2 or more array ---\n") //concat()
let animal = ["dog","pet","crow"]
let number = [1,5,4]
let cap = ["A","B"]
console.log(animal.concat(number,cap))

console.log("---slice() returing elements from given  ---\n")
animal = ["dog","pet","crow"]
console.log(animal.slice(1))

console.log("---sort() sorting elements in ascending order  ---\n")
animal = ["dog","pet","crow","parrot","cat"]
console.log(animal.sort())

console.log("---reverse() change the existing erray|reversing the array  ---\n")
animal = ["dog","pet","crow","parrot","cat"]
console.log(animal.reverse());