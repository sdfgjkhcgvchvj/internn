let num: number = 2;
let num2: number = 3;

function sum(a, b) {
  return a + b;
}
let hello: string = "hello";
console.log(`String - ${hello}`);

console.log(`Num 1 = ${num} and Num2 = ${num2}`);
console.log(`Function to add num - ${sum}`);
console.log(`Sum = ${sum(num, num2)}`);

let student: object;
student = {
  name: "mark",
  dept: "cse",
  age: 30
};
console.log(`Student ${student}`, student);

let arr: [string, number, number] = ["Order #", 47, 49];
console.log(
  `Array - ${arr} : Array elements type-  ${typeof arr[0]} , ${typeof arr[1]} , ${typeof arr[2]}`
);
