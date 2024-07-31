// // const meetInfo = {
// //      name: "meet",
// //      age: 19,
// //      gender:"male"
// // };

// // console.log(meetInfo.name);

// // key = 'age';
// // console.log(meetInfo[key]);

// // const {gender}=meetInfo;
// // console.log(gender);

// let string = "MEET"  //sting data type 
// let num = 51 // number data type
// let bool = true // boolean data type\

// console.log(typeof string) // Outputs: string
// console.log(typeof num) // Outputs: number
// console.log(typeof bool) // Outputs: boolean

// function sum(a ,b){
//      return a+b;
// }

// let num1 =10
// let num2 =20

// console.log(`sum of num1 and num2 is ${sum(num1,num2)}`) 





let arr = [1, 2, 3, 4, 5];

console.log("Length of the array:", arr.length);

console.log("First element:", arr[0]);
console.log("Third element:", arr[2]);
console.log("Last element:", arr[arr.length - 1]);


arr.push(6);
console.log("After push(6):", arr);

let poppedElement = arr.pop();
console.log("After pop():", arr);
console.log("Popped element:", poppedElement);

let shiftedElement = arr.shift();
console.log("After shift():", arr);
console.log("Shifted element:", shiftedElement);

arr.unshift(0);
console.log("After unshift(0):", arr);

let joinedString = arr.join("-");
console.log("Joined string:", joinedString);

delete arr[2];
console.log("After delete arr[2]:", arr);

let moreArr = [7, 8, 9];
let combinedArray = arr.concat(moreArr);
console.log("After concat([7, 8, 9]):", combinedArray);

let nestedArr = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = nestedArr.flat(2);
console.log("Flattened array:", flattenedArray);

arr.splice(2, 1, 10, 11);
console.log("After splice(2, 1, 10, 11):", arr);

let slicedArray = arr.slice(1, 3);
console.log("Sliced array (1, 3):", slicedArray);


let person = {
     name: "Meet",
     age: 19,
     gender: "Male"
   };
   
   function per_info(person) {
     console.log("Person info:");
     console.log("Name:", person.name);
     console.log("Age:", person.age);
     console.log("Gender:", person.gender);
   }

   per_info(person);
   