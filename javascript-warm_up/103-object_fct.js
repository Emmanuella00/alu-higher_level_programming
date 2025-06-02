#!/usr/bin/node
// This script checks for command line arguments and prints a message based on their presence
const argv = process.argv.slice(2);

const myObject = {
  value: parseInt(argv[1], 10) || 0,
  incr: function () {
    this.value++;
  }
};

console.log(`${argv[0]} is ${myObject.value}`);
myObject.incr();
console.log(`After increment: ${argv[0]} is ${myObject.value}`);
