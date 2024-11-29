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


const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

console.log(firstPet); // 'Rover'
console.log(secondPet); // 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]); // 'Rover'
console.log(petsArray[1]); // 'Snuffles'

//Exercise 2: Array destructuring

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [firstFruit, secondFruit] = pizzaToppings

console.log(firstFruit)
console.log(secondFruit)

const person = {
    name: 'Alex',
    role: 'Software Engineer',
  };
  
// Object destructuring:
const { name, role } = person;

console.log(name); // 'Alex'
console.log(role); // 'Software Engineer'

// Equivalent in traditional dot notation:
console.log(person.name); // 'Alex'
console.log(person.role); // 'Software Engineer'
 

//Exercise 3: Destructuring objects
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
// Your code here
const { make, model } = car  

/*

Review: Applying the spread operator on arrays

The spread operator (...) gives us a way to duplicate or combine arrays. Instead of manually
copying elements from one array to another using loops, the spread operator allows us to directly copy the elements of one
array into another.

*/
const originalArray = [1, 2, 3];
const duplicateArray = [...originalArray];

console.log(duplicateArray); // [1, 2, 3]

/*
In the example above, duplicateArray is an entirely separate array produced by copying the contents of originalArray.

This differs from simply assigning one array to another, which only creates a reference, not a copy:
const originalArray = [1, 2, 3];
const referenceArray = originalArray; // referenceArray is now a reference to originalArray

referenceArray.push(4); // Modifying referenceArray also modifies originalArray
console.log(originalArray); // [1, 2, 3, 4]

const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];

const fruitsAndVegetables = [...fruits, ...vegetables];

console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']

🚨 When merging multiple arrays, be sure to include the spread operator. Not doing so can result in unintentional nesting.
*/

//Exercise 4: Applying the spread operator on arrays

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']; just use the above value

// Your code here
const controversialPizzaToppings = [...pizzaToppings]

controversialPizzaToppings.map( controversialPizzaTopping => {
    console.log(controversialPizzaTopping)
})