// event handlers
function change() {

    document.getElementById("mydiv").style.backgroundColor = "pink";
  }
function change1() {

    document.getElementById("mydiv").style.backgroundColor = "green";
  }
function change2() {

    document.getElementById("mydiv").style.backgroundColor = "purple";
  }
function back(){
  location.reload();
    alert("Back to as is");
}

//event listeners
const btn1= document.getElementById("btn1");
const btn2= document.getElementById("btn2");
const btn3= document.getElementById("btn3");
const btn4= document.getElementById("btn4");
const mydiv=document.getElementById("mydiv");

btn1.addEventListener("click", function(){
  mydiv.style.backgroundColor= "yellow";
});

btn2.addEventListener("click", ()=>{
  mydiv.style.backgroundColor="lavender";
});

btn3.addEventListener("click", ()=>{
  mydiv.style.backgroundColor="blue";
});

btn4.addEventListener("click", ()=>{
  location.reload();
})