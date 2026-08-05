//dot notation
// const person = {
//     firstName: "Muskan",
//     age: 22
// }
// console.log(person.firstName)
// console.log(person.age)

//bracket notation
// const student = {
//     "full name": "Muskan Khan",
// };
// console.log(student["full name"])

//using both notations
const person = {
    firstName: "Muskan",
    age: 22,
    "full name": "Maimoona Muskan",
}
console.log(person.firstName)
console.log(person["firstName"])
console.log(person["full name"])
const key = "age";
console.log(person[key])