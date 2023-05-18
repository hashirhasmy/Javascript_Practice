class Student{

    constructor(id,name,weight){
        this.sid = id;
        this.sname = name;
        this.sweight = weight;
    }


    setDetails(id,name,weight){
        this.sid = id;
        this.sname = name;
        this.sweight = weight;
    }

    display(){
        console.log(this.sid,this.sname,this.sweight)
    }
}

let createObject001 = new Student(101,"john",85);
let createObject002 = new Student(102,"john",86);
let createObject003 = new Student(103,"john",87);
createObject001.display();
createObject002.display();
createObject003.display();


let createObject = new Student();
createObject.setDetails(4,"h",74)
createObject.display();
createObject1.setDetails(5,"h",75)
createObject1.display();
