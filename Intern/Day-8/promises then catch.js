let num = 5;
console.log("Finding odd or even");
console.log("Number -", num);
let oddoreven = new Promise((resolve, reject) => {
  if (num % 2 === 0) {
    resolve("Number is even");
  } else {
    reject("Number is odd");
  }
});
oddoreven
  .then(function success(result) {
    console.log(result);
  })
  .catch(function failed(result) {
    console.log(result);
  });
console.log(oddoreven);
