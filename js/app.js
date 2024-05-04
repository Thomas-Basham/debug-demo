console.log("Hello world!");
// global scope
let likes = "";

function setLikes() {
  // block scope
  for (let i = 0; i < 10; i++) {
    likes = likes + "❤️";
  }
}

if (false) {
  debugger; // will not run
}

setLikes();

console.log(likes);

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
    // notify user there was an error
    // extra code to keep the app running with the error
  });
