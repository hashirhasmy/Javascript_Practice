let age = 50;

if (age>10){
    console.log('write');
}else{
    console.log("don't write");
}

console.log("completed")

console.log("----------------")  

let number = 13;

if(number%2==0){
    console.log("even")    
}else{
    console.log("even")  
}

console.log("----------------")  

let a = 10,b=20,c=80;

if (a>b && a> c){
    console.log("Largest is :"+a)
} else if(b>a && b>c){
    console.log("Largest is :"+b)
} else{
    console.log("Largest is :"+c)
}

console.log("-------Switch case---------")  

let weeknumber = 2;

switch(weeknumber){
    case 1 :
        console.log("monday")
        break;
    case 2 :
        console.log("tuesday")
        break;
    case 3 : 
    console.log("wednesday")
        break;
    default :
    console.log("friday")
}