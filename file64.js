//bind
// const person ={
//     name: "Muskan",
// }
// function greet(age, city){
//     console.log(this.name, age, city)
// }
// const newGreet = greet.bind(person, 22, "Peshawar")

// newGreet();
///using all function
const person = {
    name: "Muskan"
};

function introduce(city) {
    console.log(this.name , " lives in " , city);
}
// call
introduce.call(person, "Peshawar");

// apply
introduce.apply(person, ["Karachi"]);

// bind
const intro = introduce.bind(person, "Islamabad");
intro();