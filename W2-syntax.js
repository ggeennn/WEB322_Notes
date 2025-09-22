// Arrow functions

// function declaration
// function adder(num1, num2){
//     return num1 + num2;
// }

// function expression
// let adder = function(num1, num2){
//     return num1 + num2;
// }

// arrow functions
// let adder = (num1, num2) =>{
//     return num1 + num2
// }

// let adder = (num1, num2) => num1 + num2;

// console.log(adder(1,2)); // 3

// let squared = num => num * num;
// console.log(squared(3)); //9

// let sayHello = () => console.log("Hello!");
// sayHello();

// let quickObject = {
//     name: "Homer",
//     outputNameDelay: function(){
//         setTimeout(() => {
//             console.log(this.name);
//         },1000);
//     }
// }

// quickObject.outputNameDelay();

// destructuring objects

// let product = {
//   id: '145be9',
//   price: 1.35,
//   onSale: false,
// };

// // function outputProductSale(someProduct){
// //     console.log(`Product: ${someProduct.id} is ${someProduct.onSale ? "on sale" : "not on sale"}`);
// // }

// // function outputProductSale(someProduct){
// //     // let id = someProduct.id;
// //     // let onSale = someProduct.onSale;

// //     // same as above, using object destructuring
// //     let {id, onSale} = someProduct;

// //     console.log(`Product: ${id} is ${onSale ? "on sale" : "not on sale"}`);
// // }

// function outputProductSale({id, onSale}){
//     console.log(`Product: ${id} is ${onSale ? "on sale" : "not on sale"}`);
// }

// outputProductSale(product);

// Array destructuring

// let myArray = ['A','B','C'];

// // let a = myArray[0];
// // let b = myArray[1];

// // same as above
// // let [a,b] = myArray;

// // console.log(`a: ${a}, b: ${b}`);

// // looping through arrays

// // for(let i = 0; i < myArray.length; i++){
// //     console.log(myArray[i]);
// // }

// myArray.forEach(currentElement =>{
//     console.log(currentElement);
// });

// let newArrayWithExclamations = myArray.map(currentElement => currentElement + "!");
// console.log(newArrayWithExclamations); 

// let indexOfB = myArray.findIndex(currentElement => currentElement == "B");
// console.log(indexOfB);

// const map = new Map();

// map.set("a", 1);
// map.set("b", 2);
// map.set("c", 3);
// map.set("d", 4);

// // console.log(map);

// //map.forEach(element=>console.log(element));
// // for(let i = 0; i< map.length; i++){
// //     console.log(map[i]);
// // }

// for( const [key, value] of map){
//     // let key = element[0];
//     // let value = element[1];
//     console.log(`key: ${key}, value: ${value}`);;
// }

// spread syntax

// function sum(...numbers) { // rest parameters
//   let total = 0;

//   for (const num of numbers) 
//     total += num;

//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 6)); // 21

// let array1 = ['a','b','c'];
// let array2 = ['d','e','f'];

// //let array3 = [];
// // array1.forEach(a=> array3.push(a));
// // array2.forEach(a=> array3.push(a));

// let array3 = [...array1, ...array2, 'g', 'h', 'i'];

// console.log(array3);


// let product = {
//   id: '145be9',
//   price: 1.35,
//   onSale: false,
// };

// let productWithStore = { ...product, store: '53' };

// console.log(productWithStore); // { id: '145be9', price: 1.35, onSale: false, store: '53' }

// try catch

const PI = 3.14;

try{
    PI = 99;
}catch(err){
    console.log("caught the error");
    console.log(err.message);
}

console.log("oops, I tried to change PI");

function divide(numerator, denominator){

    if(denominator == 0){
        throw new Error("Division by zero");
    }

    return numerator / denominator;
}

try{
    console.log(divide(6,3)); // 2
    console.log(divide(10,0)); // division by zero
}catch(err){
    console.log(err.message);
}

console.log("tried division by zero");