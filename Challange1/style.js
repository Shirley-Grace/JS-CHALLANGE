// // // event handler

// function change() {
//     document.getElementById("intro").innerHTML="Hello World!!";
    
// }
// function back(){
//     location.reload();

// }

// event listener
const paragraph = document.getElementById("intro");
const btn = document.getElementById("btn1");
const btn1= document.getElementById("btn2")

btn.addEventListener("click",function(){
   paragraph.textContent= "Hello World !!!!";
});

btn1.addEventListener("click", () =>{
    location.reload();
})