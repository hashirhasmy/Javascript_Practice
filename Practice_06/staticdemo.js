class Test{

    static a = 50; //static
    b = 10;   //non-static

    static m1(){
        console.log("This is m1 satatic method")
    }

    m2(){
        console.log("This is m2 not satatic method")
    }
}

    console.log(Test.a)
    console.log(Test.b)

    Test.m1();
    //Test.m2();

    //creating object to call non static methods

    let obj = new Test();
    console.log(obj.b)
    obj.m2();