//function inside function
//syntax
// function outerFunction() {
//     function innerFunction() {
//         // code
//     }
//     innerFunction();
// }
// outerFunction();
function app() {
    function hello() {
        console.log("Hello");
}
    console.log("Inside app");
    
    hello();
}
app();