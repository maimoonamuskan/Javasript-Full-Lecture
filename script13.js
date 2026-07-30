//event listner kay trough ,same event pay multiple kam karsakhtay hai 
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",() => {
    console.log("button was clicked");
})
btn1.addEventListener("click",(evt) => {
    console.log("button was clicked -handler2");
    console.log(evt.type);
    console.log(evt.target);
})