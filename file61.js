//this keyword
const person = {
    name: "Muskan",
    age: 22,

    about: function() {
        console.log(this.name);
        console.log(this.age);
    }
} 
person.about();