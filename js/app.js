
console.log("Hello world!");
// global scope
let likes = "";

function setLikes() {
  debugger
  // block scope
  for (let i = 0; i < 10; i++) {
    likes = likes + "❤️";
  }
}

setLikes();

console.log(likes);
