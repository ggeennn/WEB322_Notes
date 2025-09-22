// let architect = {
//     name: 'Joe',
//     age: 34,
//     occupation: 'Architect',
// };

// console.log(architect);
// console.log(architect.name);
// architect.age++;
// console.log(architect.age);

// let name = "ASDFASDFASDF";

// let architect = {
//     name: 'Joe',
//     age: 34,
//     occupation: 'Architect',

//     setName: function (newName) {
//         this.name = newName;
//     },

//     setAge: function (newAge) {
//         this.age = newAge;
//     },

//     getAge: function () {
//         return this.age;
//     },

//     getName: function () {
//         return this.name;
//     },

//     outputNameDelay: function () {
//         let that = this;
//         setTimeout(function () {
//             console.log(that.name);
//         }, 1000);
//     }
// };

// console.log(architect.getName());
// architect.outputNameDelay();

// class Architect {
//   name;
//   age;
//   occupation = 'architect'; // default value of "architect" for occupation

//   constructor(setName = '', setAge = 0) { // handle missing parameters with '' and 0
//     this.name = setName;
//     this.age = setAge;
//   }

//   setName(newName) {
//     this.name = newName;
//   }

//   setAge(newAge) {
//     this.age = newAge;
//   }

//   getName() {
//     return this.name;
//   }

//   getAge() {
//     return this.age;
//   }
// }

// let architect1 = new Architect('Sarah', 46);
// let architect2 = new Architect('Brian', 24);

// console.log(architect1.getName());
// console.log(architect2.getName());

// architect1.age = 99;
// console.log(architect1.getAge());


// class Architect {
//   #name;
//   #age;
//   #occupation = 'architect'; // default value of "architect" for occupation

//   constructor(setName = '', setAge = 0) { // handle missing parameters with '' and 0
//     this.#name = setName;
//     this.#age = setAge;
//   }

//   setName(newName) {
//     this.#name = newName;
//   }

//   setAge(newAge) {
//     this.#age = newAge;
//   }

//   getName() {
//     return this.#name;
//   }

//   getAge() {
//     return this.#age;
//   }
// }

// let architect1 = new Architect('Sarah', 46);

// // architect1.#age = 99; // won't work because #age is private

// architect1.setAge(99);
// console.log(architect1.getAge());

// class Architect {
//   #name;
//   #age;
//   #occupation = 'architect'; // default value of "architect" for occupation

//   constructor(setName = '', setAge = 0) {
//     this.#name = setName;
//     this.#age = setAge;
//   }

//   set name(newName) {
//     this.#name = newName;
//   }

//   set age(newAge) {
//     console.log("calling the set age() function");
//     this.#age = newAge;
//   }

//   get name() {
//      console.log("calling the get age() function");
//     return this.#name;
//   }

//   get age() {
//     return this.#age;
//   }
// }

// let architect1 = new Architect('Joe', 34);
// console.log(architect1.name); // Joe
// architect1.age = 99;

// let myString = "Hello";

// String.prototype.sayHello = function(){
//     console.log("Hello from String Prototype");
// }

// console.log(myString.toUpperCase());
// myString.sayHello();

class Job {
  #name;
  #age;

  constructor(setName = '', setAge = 0) {
    this.#name = setName;
    this.#age = setAge;
  }

  set name(newName) {
    this.#name = newName;
  }

  set age(newAge) {
    this.#age = newAge;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }
}

class Architect extends Job {
  #occupation = 'architect';

  constructor(setName = '', setAge = 0) {
    super(setName, setAge); // invoke the "parent" constructor
  }

  #privateMethod() {
    console.log("I'm a private method");
  }
}

Job.prototype.sayHello = function(){
    console.log("say hello from job");
}

let architect1 = new Architect('Joe', 34);
console.log(architect1.name);
architect1.sayHello();

