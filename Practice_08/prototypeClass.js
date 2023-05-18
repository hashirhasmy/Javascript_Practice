class prototypeClassdemo{
    constructor (eid,ename){
            this.eid = eid;
            this.ename = ename;
    }
}

prototypeClassdemo.prototype.weigthy = 55;

//adding function to class

prototypeClassdemo.prototype.display=function(){
    console.log(this.eid,this.ename,this.weigthy)
}

let x = new prototypeClassdemo(5,"hashir");
// console.log(x.eid,x.ename,x.weigthy)
x.display();

let x1 = new prototypeClassdemo(45,"harsan");
// console.log(x1.eid,x1.ename,x1.weigthy)
x1.display()

