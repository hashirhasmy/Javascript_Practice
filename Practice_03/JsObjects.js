let person ={
    firstname : "John",
    lastname : "mike",
    weight : 45,
    age : 52
}
console.log("//Accesong object properties")
console.log(person.age)

console.log("//Adding a proerty to person object")
person.height=158
console.log(person)

console.log("//update existing property")
person.age=53;
console.log(person)

console.log("//remove the property from object")
delete person.age;
console.log(person.age)


console.log("--for in loop--")

for (let x in person) {
    //console.log(person[x]) //value of the property will get print
    console.log(x + ":" + person[x]);
}

let employee = {
    empid : 01,
    salary : 5000,
    empname : "test",
    bonus : function(){
        return (this.salary*10)/100;
    }
}

console.log(employee.bonus());

