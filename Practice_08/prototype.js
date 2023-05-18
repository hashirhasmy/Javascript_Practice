function students(){
    this.name = "hashir"
    this.age = 24;
}

students.prototype.weight = 58;
let a = new students();
console.log(a.name,a.age)
console.log(a.name,a.age,a.weight);

let b = new students();
console.log(b.name,b.age)
console.log(b.name,b.age,b.weight);