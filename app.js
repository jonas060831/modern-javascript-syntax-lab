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

/*
Review: Applying the spread operator on objects

The spread operator can also be applied to objects:
const originalObject = {
  foo: 'Hello',
  bar: 100,
};

const clonedObject = { ...originalObject };
console.log('Clone: ', clonedObject); // { foo: 'Hello', bar: 100 }

const originalObject = {
  foo: 'Hello',
  bar: 100,
};

const clonedObject = { ...originalObject };
console.log('Clone: ', clonedObject); // { foo: 'Hello', bar: 100 }

In the example above, we can see how the properties of originalObject have been copied over into a new object called clonedObject.

The use of the spread operator here differs significantly from direct assignment:

const originalObject = {
  foo: 'Hello',
  bar: 100,
};

const clonedObject = originalObject;
clonedObject.foo = 'Goodbye';

console.log(originalObject); // { foo: 'Goodbye', bar: 100 }

The example above demonstrates a pitfall of attempting to clone an object without the spread operator.
When clonedObject is assigned originalObject directly, it doesn’t actually create a new,
independent object. Instead, clonedObject becomes a reference to originalObject.
This means any changes made to clonedObject also affect originalObject,
as they both point to the same data.

Like with Arrays, this issue can be remedied when we apply the spread operator:

const originalObject = {
  foo: 'Hello',
  bar: 100,
};

// Copy the properties of originalObject:
const clonedObject = { ...originalObject };

// Update the properties of clonedObject:
clonedObject.foo = 'Goodbye';
clonedObject.bar = 0;

console.log('Original: ', originalObject); // { foo: 'Hello', bar: 100 }
console.log('Clone: ', clonedObject); // { foo: 'Goodbye', bar: 0 }

With the spread operator, clonedObject is a brand new object, with its own separate copy of the data from originalObject. Now, modifying clonedObject will not impact the originalObject

*/

//Exercise 5: Applying the spread operator on objects

// Duplicate the following object and spread its values into a new variable `myCar`.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
  
const myCar = { ...car }

myCar.model = 'q7'

console.log(car)
console.log(myCar)

/*
Review: Dynamic keys in objects

Through bracket notation, variables and expressions can be used as dynamic keys in an object. Dynamic keys can be used to create, access, and modify properties in an object. Dynamic keys enhance our ability to access data. This approach is particularly useful in scenarios where key names are not known ahead of time or when they need to be computed on the fly. It also allows for more concise and readable code, avoiding the need for additional steps when assigning properties to objects.

Take for example, the use of selectedFruit as a dynamic key in the codeblock below:

const fruitInventory = {
  apples: 2,
  oranges: 4,
};

const selectedFruit = 'apples'; // Variable as a dynamic key
const selectedFruitCount = fruitInventory[selectedFruit];

console.log(selectedFruitCount); // 2

This technique can be extended to the creation of objects,
where property names are determined dynamically:

const fruitType = 'bananas'; // Variable as a dynamic key

const fruitInventory = {
  [fruitType]: 5,
};

console.log(fruitInventory); // { bananas: 5 }
*/

//Exercise 6: Dynamic keys in objects

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const propertyName = 'email'

const userProfile = {
    [propertyName] : 'johndoe@gmail.com'
}

/*

Review: import and export

In JavaScript, the import and export syntax allows us to share code between different files. This is a more modern approach compared to the require and module.exports syntax used in CommonJS.

With export, you can make functions, objects, or primitives available for use in other files.

There are two main types of exports:

Named exports: For exporting multiple items from a file:
export const myNumber = 123;
export const myString = 'Hello';

Default exports: For exporting a single item from a file:
export default function superCoolFunction() {
    //super cool stuff
}

🏆 It’s possible to mix default and named exports in a single module,
but it’s a best practice to stick to one style for consistency and clarity.

Using import, you can bring those exported items into another file.

Importing named exports:
import { myNumber, myString } from './myData.js';

Importing a default export:
import superCoolFunction from './superCoolFunction.js';

You can also import all named exports as a single object, which is useful when dealing
with modules that export several items:

import * as MyData from './myData.js';
console.log(MyData.myNumber);
console.log(MyData.myString);

This allows for more organized code by separating concerns into modules.

*/

// Exercise 7: Import and Export
/*
Follow the steps below for some practice with import and export. \
Update the values for default, age, and job accordingly:

1. npm init -y
2. Add the following property to package.json: "type":"module",
3. Create two files: exportingFile.js and importingFile.js:
    touch exportingFile.js
    touch importingFile.js
4. In exportingFile.js add the following:
    export default 'Matt';
5. In importingFile.js add the following:
    import name from './exportingFile.js';
    console.log(name);
6. Run importingFile.js like so:
    node importingFile.js
7. To export additional values, update exportingFile.js like so:
    export default 'Matt';
    export const age = 43;
    export const job = 'programmer';
8. These additions can be imported by updating importingFile.js like so:
    import name, { age, job } from './exportingFile.js';
    console.log(name, age, job);
*/

/*
Review: Default parameters

Default parameters are just that - default values for parameters. These defaults are applied when no value is passed for those parameters during a function call.

Take this example:


function addThreeNumbers(numA, numB, numC) {
  return numA + numB + numC;
}

addThreeNumbers(2);

This will return NaN, because the value of numB and numC are both undefined. Let’s apply some defaults to the numB and numC parameters:

function addThreeNumbers(numA, numB = 2, numC = 1) {
  return numA + numB + numC;
}

addThreeNumbers(2);

Now this function will return the number 5. What if we also give a default to numA?

function addThreeNumbers(numA = 1, numB = 2, numC = 1) {
  return numA + numB + numC;
}

addThreeNumbers(2);

This function is still going to return the number 5.
The default value of 1 on numA will be overridden by the passed in value of 2.
*/

//Exercise 8: Default parameters

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

const logIt = (noun = 'cat', adjective = 'white') => {
    console.log(`The ${noun} is ${adjective}`)
}

logIt()
// logIt('mouse', 'green')

/*
Review: The ternary operator

The ternary operator gives us a way to handle conditional logic in a single line of code. Ternaries can be viewed as a more concise version of an if...else statement. It can also simplify the process of assigning a value to a variable based on a condition.

A ternary consists of three parts:

Condition: A boolean expression evaluated for truthiness, placed before the ?.
True Expression: The value assigned to the variable if the condition is true, located immediately after the ?.
False Expression: The value assigned to the variable if the condition is false, following the :.
Consider the following example using an if...else statement:


const age = 22;
let access;

if (age > 21) {
  access = 'Yes';
} else {
  access = 'No';
}

console.log(access); // 'Yes'

This logic can be streamlined using a ternary:

const age = 22;
let access = age > 21 ? 'Yes' : 'No';

console.log(access); // 'Yes'

💡 The ternary operator is a powerful tool for simplifying conditional expressions,
making it ideal for straightforward assignments based on a single condition.



*/

//Exercise 9: Ternary operator

// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here
const isItTasty = pizza === 'tasty' ? 'yum' : 'yuck'

/*
Review: Boolean gates

Logical operators such as 
&& (AND) and || (OR) play an interesting role when used outside of if...else statements. 
In this context, they can be used to evaluate and return values directly,
based on the truthiness or falsiness of the values involved.

The && operator
The && operator evaluates expressions from left to right and returns
the first falsy value it encounters. If all values are truthy, it returns the last value.

Let’s take a look at a few examples of the && operator at work:

When the first expression (false) being evaluated is falsy,
and result will be assigned that value (false).
const result = false && 'foo';
console.log(result); // Output: false

When the first value is truthy ('hello') and the second value is falsy (''),
the result is assigned the empty string (''), as it is the first falsy value encountered.
const result = 'hello' && '';
console.log(result); // Output: ''

When both values are truthy, the result is the value of the last expression ('bar').
const result = 'foo' && 'bar';
console.log(result); // Output: 'bar'

💡 Remember, in JavaScript, falsy values include '' (empty strings), 0, null, undefined, NaN, and false.
Everything else is considered truthy.

The || operator
The || operator evaluates expressions from left to right and returns the first truthy value it encounters. If all values are falsy, it returns the last value.

Let’s take a look at a few examples of the || operator at work:

When the first expression ('') is falsy, result is assigned 'foo' as it’s the first truthy value.
const result = '' || 'foo';
console.log(result); // Output: 'foo'

If the first value (2) is truthy, the evaluation stops, and result is assigned the first value (2).
const result = 2 || 0;
console.log(result); // Output: 2

When all values being evaluated are falsy ('' and 0), result is assigned the last value (0), as no truthy value is found.
const result = '' || 0;
console.log(result); // Output: 0

💡 The || operator can be helpful for setting fallback or default values.
Can you guess what the values of the variables will be:

const result1 = 'bar' && 'foo';
const result2 = false || 243;
const result3 = 42 && false;
const result4 = myVar || 3000;

console.log('result1:', result1);
console.log('result2:', result2);
console.log('result3:', result3);
console.log('result4:', result4);


*/


/*
Exercise 10: Boolean gates
In modern JavaScript, a common pattern is to assign a default value to variables if no specific value is provided. This technique is especially useful in settings where configurations might be optional. For example, users might not set their language or theme preferences on a website, and you’d want to fall back to some default settings.

Now that you’ve seen how to assign default values using the logical OR operator, let’s reinforce this concept with a direct application.

Let’s assume we have a variable called localLangConfig that might contain a language code (like ‘es’ for Spanish, ‘fr’ for French) or might be null if no language is selected
Your task is to create a variable LANG that should use the value from localLangConfig if it’s not null. If localLangConfig is null, default LANG to ‘en’ (English).

*/

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator.
//This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
let LANG = localLangConfig || 'en'

// Log the result
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here

let USER_THEME = userSavedTheme || 'light'
// Log the result
console.log('User theme setting:', USER_THEME);

/*

Review: Optional chaining

Optional chaining is a way to safely access deeply nested properties in an object.
This approach can help us avoid the errors that occur when attempting to access
undefined or null properties.

Consider a scenario where we attempt to access a property that doesn’t exist,
which normally results in an error:

const adventurer = {
  name: 'Alice',
};

console.log(adventurer.dog.name); // TypeError: Cannot read properties of undefined (reading 'name')

In this application, it’s probable that the dog property might be added in later.
This is where some optional chaining might prove useful.

Using console.log(adventurer.dog?.name); will allow our code to run without an error:

const adventurer = {
  name: 'Alice',
};

let dog = adventurer.dog?.name;

console.log(dog); // undefined

Now, instead of the non existent property causing an error, our code logs a value of undefined.
*/

//Exercise 11: Optional chaining

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
};
  
let cat; 

// Your code here
cat = adventurer.cat?.age





console.log(cat)