//create function to create multiple object
function createUser(name, age){
    const user = {};
    user.name = name;
    user.age = age;
    return user;
}
const user1 = createUser("Muskan", 22);
const user2 = createUser("Sehrish", 21);
console.log(user1);
console.log(user2);