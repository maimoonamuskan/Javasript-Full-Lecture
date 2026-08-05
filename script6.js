let divs = document.querySelectorAll(".box")
// console.log(divs[0])
let idx=1;
for(div of divs){
div.innerText = `new unique value ${idx}`;
idx++;
}
// divs[0].innerText= "new value 1"
// divs[1].innerText= "new value 2"
// divs[2].innerText= "new value 3"