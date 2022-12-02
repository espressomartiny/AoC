// fetch('input.txt')
//   .then(response => response.text())
//   .then(text => console.log(text));

const fs = require("fs");

const data = fs
  .readFileSync("day02.txt", { encoding: "utf8" })
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // remove starting/ending whitespace
  .split("\n") // split on newline
  .map((line) => line.split(" "));

console.log(data);

function part1() {
  console.log(data);
}

function part2() {}
