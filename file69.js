//prototype
function User(name){
    this.name = name;
}
User.prototype.about = function(){
    console.log(this.name);
}
const user1 = new User("Muskan");
const user2 = new User("Sehrish");
user1.about();
user2.about();