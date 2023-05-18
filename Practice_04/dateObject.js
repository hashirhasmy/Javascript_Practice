function time(){
    let d = new Date();
    console.log(d);
    // console.log(d.getDate());
    // console.log(d.getMonth());
    // console.log(d.getFullYear());
    setTimeout(time,1000);
}

time();
