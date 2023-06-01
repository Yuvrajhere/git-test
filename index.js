// console.log("Hello");
// console.error("Hello");
// console.warn("Hello");

// console.table(["apples", "oranges", "bananas"]);

// const str1 = 'Hello';
// const str2 = 'World';

// console.log("new string", str1.slice());

// console.log("str1", str1);

// const arr = ["Hello", "World", ,"Hii"];

// push, pop, shift, unshift

// push - adds to end
// pop - removes from end
// shift - removes from start
// unshift - adds to start

// console.log("arr 1", arr);

// arr.push("one");

// console.log("arr 2", arr)

// arr.pop()

// console.log("arr 3", arr)

// arr.unshift("third")

// console.log("arr 4", arr)

// arr.shift()

// console.log("arr 5", arr)

// "Hello", "World", undefined, "Hiii"

// const arr = [1, 2, 3, 4, 5];

// [4, 3, 5, 1, 2] => [1, 2, 3, 4, 5]

// arr.slice(startIndex, endIndex);

// console.log(arr.slice(-2));

// splice(startIndex)
// splice(startIndex, deleteCount)
// splice(startIndex, deleteCount, item1)
// splice(startIndex, deleteCount, item1, item2, itemN)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr);

// arr.splice(2); // removes all the elements after index 2 (inclusive)
// arr.splice(2, 3); // removes all the elements after index 2 (inclusive) upto 3 values
// arr.splice(2, 3, "Hello", "World", "example", "example 2s");
// removes all the elements after index 2 (inclusive)
// upto 3 values and replace with other values

// arr.splice(4, 0);

// console.log(arr);

// destructing
// spread operator

// destructing
// const name = ["Yuvraj", "Singh", "Bangalore", "BE"];

// const [firstName, ,popcorn] = ["Yuvraj", "Singh", "Bangalore", "BE"];

// console.log(firstName, popcorn);

// spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [7, 8, 9];

// console.log("arr1", arr1);
// console.log("spread", ...arr1);
// console.log("spread 2", 1, 2, 3);

// const newArr = [...arr2, ...arr1, "Hello" ];
// [[1,2,3], [7,8,9]]
// [1,2,3, 7,8,9]
// [1,2,3, 7,8,9]

// [1,2,3, "Hello", [7,8,9]]

// arr1 => [1,2,3] , arr2 => [7,8,9]
// [1,2,3,7,8,9]
// [arr1, arr2]

// console.log("parent arr complete", newArr);

// console.log("child arr 0th index", newArr[0]);
// console.log("child arr 1st index", newArr[1]);

const a = [1,2,3];
const b = [...a]; // [1,2,3]

b[1] = 4;

console.log(a);
console.log(b);

// objects, objects destructuring and spread operator for objects, functions, callback functions

// array methods, objects and functions

