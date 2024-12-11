console.log("chaliye shuru karte hai ");
// Object Create

// let rectangle = {
//     length: 1,
//     breath: 2,
//     draw: function () {
//         console.log("Drawing rectangle");
//     },
// };

//------------------------- Factory function-----------------------

// in below  every object will have same property as lenth=1 and breath = 2 with draw function
// function createRectangle() {
//         return (rectangle = {
//                 length: 1,
//                 breath: 2,
//                 draw() {
//             console.log("Drawing rectangle");
//         },
// });
// }
// let rectangleObj = createRectangle();

// Another EXAMPLE

// function createRectangle(len, bre) {
//     return (rectangle = {
//         length: len,
//         breath: bre,
//         draw() {
//             console.log("Drawing rectangle");
//         },
//     });
// }

// ---------------We can use this also --------
// function createRectangle(length , bre) {
//     return (rectangle = {
//         length,
//         breath,
//         draw() {
//             console.log("Drawing rectangle");
//         },
//     });
// }
// let rectangleObj1 = createRectangle(3, 9);
// let rectangleObj2 = createRectangle(5, 15);
// let rectangleObj3 = createRectangle(4, 5);

// function Rectangle(len, bre) {
//     this.length = len;
//     this.breath = bre;
//     this.draw = function () {
//         console.log("drawing");
//     };
// }
// // Object creation using constructor function
// let rectangleObj = new Rectangle(4, 5);
// rectangleObj.color = "yellow";
// console.log(rectangleObj);
// delete rectangleObj.color;
// console.log(rectangleObj);

// ----------------Primitive Type ---------------
// let a = 10;
// let b = a;
// a++;

// console.log(a); // 10
// console.log(b); //10

// ------------------Refrence type ---------

// let a = { value: 10 };
// let b = a;
// a.value++;
// console.log(a.value);// 11
// console.log(b.value);//11

// let rectangle = {
//     length: 3,
//     bradth: 4,
// };

// for in loop
// for (let key in rectangle) {
//     console.log(key, rectangle[key]);
// }

// -----for of --------
// for (let key of Object.keys(rectangle)) {
//     console.log(key);
// }

// for (let key of Object.entries(rectangle)) {
//     console.log(key);
// }

// ------------------------------------------------------------
// ----------------Object Cloning-----------

// #1 by Iteration
// let src = {
//     a: 10,
//     b: 29,
//     c: 30,
// };
// let dest = {};

// for (let key in src) {
//     dest[key] = src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);// doesn't affect src

//        #2 by Assign

// let src = {
//     a: 10,
//     b: 29,
//     c: 30,
// };

// let destt = Object.assign({}, src);
// console.log(destt);
// src.a++;
// console.log(destt);

// you can also assign multiple values
// let src2 = { vlaue: 25 };
// let dest = Object.assign({}, src, src2);
// console.log(dest);
// src.a++;
// console.log(dest);

//       #3 by spread

let src = {
    a: 10,
    b: 20,
    c: 30,
};
let src2 = { d: 35 };
let dest = { ...src,...src2 };
console.log(dest);
