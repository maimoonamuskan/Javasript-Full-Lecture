//rest parameter
//alway in the end
function person(name, age, ...hobbies){
    console.log(name);
    console.log(age);

    console.log(hobbies);
}

person("Muskan", 22, "Reading", "Coding", "Traveling")