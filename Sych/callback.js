function challange1(callback){
    setTimeout(function (){
        console.log("Challange1 Complete")
        callback();
    }, 1000);
}
function challange2(callback){
    setTimeout(function (){
        console.log("Challange2 Complete")
        callback();
    }, 2000);
}
function challange3(callback){
    setTimeout(function (){
        console.log("Challange3 Complete")
        callback();
    }, 1500);
}
function challange4(callback){
    setTimeout(function (){
        console.log("Challange4 Complete")
        callback();
    }, 2300);
}
function challange5(callback){
    setTimeout(function (){
        console.log("Challange5 Complete")
        callback();
    }, 700);
}


//callback hell

challange1(function(){
    challange2(function(){
        challange3(function(){
            challange4(function(){
                challange5(function(){
                    console.log("Challanges Overrrr!!!")
                })
            }) 
        })
    })
})







