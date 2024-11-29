//review: Array.prototype.map()
const array1 = ['vanilla', 'chocolate', 'strawberry']

const array2 = array1.map(element => {
    return element + ' ice cream'
})

console.log(array2)

//Exercise 1; Apply Array.prototype.map()
// Use `.map()` to iterate over the following array:
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const newArr = nums.map( num => {
    return num * 2
})

console.log(newArr)