// // // console.log('Hello');

// // // setTimeout(() => {
// // //   console.log('World');
// // // }, 2000);

// // // console.log('!');


// // function connectToDatabase(queryFunction, sqlStatement) {
// //   let randomTime = Math.floor(Math.random() * 2000) + 1;

// //   setTimeout(() => {
// //     console.log('Connection Established');
// //     queryFunction(sqlStatement);
// //   }, randomTime);
// // }

// // function queryData(sqlStatement) {
// //   let randomTime = Math.floor(Math.random() * 1000) + 1;

// //   setTimeout(() => {
// //     console.log(`${sqlStatement} Complete`);
// //   }, randomTime);
// // }

// // connectToDatabase(queryData, "select * from Employees")

// // //connectToDatabase(queryData("select * from Employees"));
// // //queryData("select * from Employees");

// // output "A" after a random time between 0 & 3 seconds
// function outputA(outputBFunction, outputCFunction) {
//   let randomTime = Math.floor(Math.random() * 3000) + 1;

//   setTimeout(() => {
//     console.log('A');
//     outputBFunction(outputCFunction)
//   }, randomTime);
// }

// // output "B" after a random time between 0 & 3 seconds
// function outputB(outputCFunction) {
//   let randomTime = Math.floor(Math.random() * 3000) + 1;

//   setTimeout(() => {
//     console.log('B');
//     outputCFunction();
//   }, randomTime);
// }

// // output "C" after a random time between 0 & 3 seconds
// function outputC() {
//   let randomTime = Math.floor(Math.random() * 3000) + 1;

//   setTimeout(() => {
//     console.log('C');
//   }, randomTime);
// }

// outputA(outputB, outputC);
// //outputB();
// //outputC();

// instead we'll use Promises

// function outputA() {

//     return new Promise((resolve, reject) => {
//         let randomTime = Math.floor(Math.random() * 3000) + 1;

//         setTimeout(() => {

//             if(randomTime % 2 == 0){ // random Time was even
//                 resolve('A');
//                 //reject('rejected after A'); // not rejected, since resolved was executed first
//             }else{ // random Time was odd
//                 reject('Random Time was odd');
//             }

//             //console.log("I'm still executed within the function");

//         }, randomTime);
//     });

// }

// outputA().then((resolvedValue)=>{
//     console.log(resolvedValue);
// }).catch((rejectedMessage)=>{
//     console.log(rejectedMessage);
// });

// original example with promises

function outputA() {
    return new Promise((resolve, reject) => {
        let randomTime = Math.floor(Math.random() * 3000) + 1;

        setTimeout(() => {

            if (randomTime % 2 == 0) {
                resolve("A");
            } else {
                reject("A was odd")
            }

        }, randomTime);
    });

}

// output "B" after a random time between 0 & 3 seconds
function outputB() {

    return new Promise((resolve, reject) => {
        let randomTime = Math.floor(Math.random() * 3000) + 1;

        setTimeout(() => {

            if (randomTime % 2 == 0) {
                resolve("B");
            } else {
                reject("B was odd")
            }

        }, randomTime);
    });

}

// output "C" after a random time between 0 & 3 seconds
function outputC() {
    return new Promise((resolve, reject) => {
        let randomTime = Math.floor(Math.random() * 3000) + 1;
        setTimeout(() => {

            if (randomTime % 2 == 0) {
                resolve("C");
            } else {
                reject("C was odd")
            }

        }, randomTime);

    });
}
/*
outputA().then((outputAValue)=>{
    console.log(outputAValue);
    outputB().then((outputBValue)=>{
        console.log(outputBValue);
        outputC().then((outputCValue)=>{
            console.log(outputCValue);
        }).catch(Cerr=>{
            console.log(Cerr);
        });
    }).catch(Berr=>{
        console.log(Berr)
    });
}).catch(Aerr=>{
    console.log(Aerr);
});*/

async function doPromises() {

    try {
        console.log(await outputA());
        console.log(await outputB());
        console.log(await outputC());
    }catch(err){
        console.log(err)
    }
}

doPromises();


// NOTE: async functions always return a promise

async function adder(num1, num2) {
  return num1 + num2;
}

adder(1, 2).then((result) => console.log(result)); //3


