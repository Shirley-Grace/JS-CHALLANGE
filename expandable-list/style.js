const group = document.getElementById("group hidden");


const listItem = document.getElementsById("parent-list");

listItem.addEventListener("click", (event)=>{
    if (event.target.tagName === "li"){
        const subList = event.target.querySelector("group-hidden");
if(group) {
    group.classList.toogle('hidden')
    }  
 }
});