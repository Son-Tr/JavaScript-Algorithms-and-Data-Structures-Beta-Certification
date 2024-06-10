const infixToFunction = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
  }
  
  const infixEval = (str, regex) => str.replace(regex, (_match, arg1, operator, arg2) => infixToFunction[operator](parseFloat(arg1), parseFloat(arg2)));
  
  const highPrecedence = str => {
    const regex = /([\d.]+)([*\/])([\d.]+)/;
    const str2 = infixEval(str, regex);
    return str === str2 ? str : highPrecedence(str2);
  }

  const isEven = num => num % 2 === 0;
const sum = nums => nums.reduce((acc, el) => acc + el, 0);
const average = nums => sum(nums) / nums.length;

const median = nums => {
  const sorted = nums.slice().sort((a, b) => a - b);
  const length = sorted.length;
  const middle = length / 2 - 1;
  return isEven(length)
    ? average([sorted[middle], sorted[middle + 1]])
    : sorted[Math.ceil(middle)];
}

const spreadsheetFunctions = {
    "":(x) => x,
    sum,
    average,
    median,
    even: nums => nums.filter(isEven),
    someeven: nums => nums.some(isEven),
    everyeven: nums => nums.every(isEven),
    firsttwo: nums => nums.slice(0, 2),
    lasttwo: nums => nums.slice(-2),
    has2: nums => nums.includes(2),
    increment: nums => nums.map(num => num + 1),
    random: ([x, y]) => Math.floor(Math.random() * y + x),
    range: nums => range(...nums),
    nodupes: nums => [...new Set(nums).values()]
  }
  
  const applyFunction = str => {
    const noHigh = highPrecedence(str);
    const infix = /([\d.]+)([+-])([\d.]+)/;
    const str2 = infixEval(noHigh, infix);
    const functionCall = /([a-z0-9]*)\(([0-9., ]*)\)(?!.*\()/i;
    const toNumberList = args => args.split(",").map(parseFloat);
    const apply = (fn, args) => spreadsheetFunctions[fn.toLowerCase()](toNumberList(args));
    return str2.replace(functionCall, (match, fn, args) => spreadsheetFunctions.hasOwnProperty(fn.toLowerCase()) ? apply(fn, args) : match);
  }