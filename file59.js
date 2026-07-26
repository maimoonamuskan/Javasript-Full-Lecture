//clone object using object.assign
const obj1 = {
    name: "Muskan",
    age: 22
}
const obj2 = Object.assign({}, obj1);         //{}->new object created , copied properties of obj1 to that empty new object
console.log(obj2);