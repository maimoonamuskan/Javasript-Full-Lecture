let div = document.querySelector("div");
div.onmouseover = (evt)=>{
console.log("you are inside div");
console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX , evt.clientY);
};