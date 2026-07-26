//lexical scope
//search in global scope 
//age found in outer 
//name found in global scope
let firstName = "Muskan";
function outer() {
    let age = 22;
    function inner() {
        console.log(firstName);
        console.log(age);
    }


    inner();
}
outer();