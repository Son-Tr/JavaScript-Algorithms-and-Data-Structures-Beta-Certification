let pushed = rows.push("freeCodeCamp");
console.log(pushed);
let popped = rows.pop();
console.log(popped);
console.log(rows);

const numbers = [1, 2, 3];
const unshifted = numbers.unshift(5);
const push = numbers.push(5)

//!!!! unshift (head) != push ( tail)

const shifted = numbers.shift();
const poped = numbers.pop();

console.log(numbers.shift()) = 1;
console.log(numbers.pop()) = 3;

//!!!! shift (head) != pop ( tail)


const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);