// function:linear search
function findTarget(array, target){
    for (let i = 0; i < array.length; i++){
        if (array[i] === target){
            return i;
    }
}
    return -1;

}

const myArray = [1, 3, 8, 90];        //2
const ans = findTarget(myArray, 8);
console.log(ans);