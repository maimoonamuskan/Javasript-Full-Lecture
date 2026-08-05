//store method in different object
const userMethods ={
    about(){
        console.log(this.name);
    }
}
function createUser(name) {
    const user = {};
    user.name = name;
    user.about = userMethods.about;
    return user;
}
const user1 = createUser("Muskan");
const user2 = createUser("Sehrish");
user1.about();
user2.about();