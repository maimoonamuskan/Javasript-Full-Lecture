//small warning
const person ={
    name: "Muskan",
}

function greet(age){
    console.log(this.name,age);
}

// call()
greet.call(person,22)

// apply()
greet.apply(person, [22])

// bind()
const greeting = greet.bind(person, 22)
greeting();