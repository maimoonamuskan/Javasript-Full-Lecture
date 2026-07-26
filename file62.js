//calling function
const person ={
    name: "Muskan"
}
function greet(age, city){
    console.log(this.name, age, city);
}
greet.apply(person, [22, "Lahore"]);