//this function
const student = {
    name: "Muskan",
    age: 20,
    greet: function () {
        console.log(this.name);
    }
};
student.greet();