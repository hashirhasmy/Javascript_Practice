class A{
    a=100;
    setA(){
        console.log(this.a);
    }
}

class B extends A{
    b=200;
    setB(){
        console.log(this.b);
    }
}

let x = new B();
x.setA();
x.setB();

