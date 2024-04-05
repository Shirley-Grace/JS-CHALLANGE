// function greet(name) {
//     return "hello"+name;    
// }
// console.log("Berfore return call");
// console.log(greet(" Tom"));
// console.log(greet(" Dick"));
// console.log(greet(" Harry"));
// console.log("end callback");


// console.log('start');
// setTimeout(function(){
//     console.log('setTimeout');
// }, 5000);
// console.log('End')

console.log("Start");
console.log("Then");
document.getElementById("btn").addEventListener('click', function(){
    console.log('The Button Has Been Clicked')
});