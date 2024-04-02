// Array

let fruit = "Mango";
console.log(fruit);
console.log(typeof(fruit));

let fruits = ["Mango", "Banana", "Apple", "Cherry"];
console.log(fruits);
console.log(fruits[2]);
console.log(fruits[7]);

//Length of Index
console.log(fruits.length);

//Update Elements
fruits[1] = 'Avocado';
console.log(fruits);

//Adding Elements
fruits.push("Dewberry");        //at the end
console.log(fruits);

fruits.unshift("Banana");       //at the beginning
console.log(fruits);

//Deleting Elements
fruits.pop();                   //at the end
console.log(fruits);

fruits.shift();                 //at the beginning
console.log(fruits);

// Sorting
fruits.sort();                  //Alphabetically
console.log(fruits);

fruits.sort().reverse();        //Reverse
console.log(fruits);

//Searching
// indexOf Method
let index = fruits.indexOf('Avocado');
console.log("Index:", index);

//includes Method
console.log("Is apple in fruit?", fruits.includes("Apple"));

// Joining
// join Method
console.log("Joined fruits:", fruits.join("-"));

//Slice Method
let sliced_fruits = fruits.slice(1, 3);
console.log(sliced_fruits);
console.log(fruits);

// //Splice Method
// let spliced_fruits = fruits.splice(1, 2);
// console.log(spliced_fruits);
// console.log(fruits);

// // Looping through the elements
// fruits.forEach(function(fruit){
//     console.log(fruit);
// });

//For Loop
for (let i=0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//Reverse For Loop
for (let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}

//For Of Loop
for (fruit of fruits){
    console.log(fruit);
}