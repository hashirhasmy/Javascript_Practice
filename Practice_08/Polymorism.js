class pol{
    test(id){
            console.log(id);
    }

    test(id,name){
        console.error(id,name);
    }


}


let x = new pol()
// console.log(x.test(25))
console.log(x.test(25,"hashir"))