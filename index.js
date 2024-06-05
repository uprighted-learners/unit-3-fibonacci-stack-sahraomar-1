// Create the `series` variable
var series = [0, 1];
  // your code here

while (series.length < 10) {
  // add .pop() method on array twice and assign call to .pop() to a variable
let LastNumber = series.pop();
let secondLastNumber = series.pop();
// initiate sum to show lastNumber + secondLastNumber
let sum = LastNumber + secondLastNumber;
//push numners back to array with sum
series.push(secondLastNumber);
series.push(LastNumber);
series.push(sum);

}

// Print the Fibonacci sequence to the console
console.log(series);
// the first ten numbers should be
// 0 1 1 2 3 5 8 13 21 34
