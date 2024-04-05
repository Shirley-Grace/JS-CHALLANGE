const hello = document.getElementsByClassName("button1")
const back = document.getElementsByClassName("button2")
const change = document.getElementById("intro")


 hello.addEventListener("click", function(){
change.style.display = "none"
 })
back.addEventListener("click",function(){

})

function greet(name) {
    return "hello"+name;    
}
console.log("Berfore return call");
console.log(greet("Tom"));
console.log(greet("Dick"));
console.log(greet("Harry"));
console.log("end callback");