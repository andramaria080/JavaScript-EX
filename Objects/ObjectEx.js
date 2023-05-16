// EX 1:
const reteta = {
  titlu: "Pizza",
  portii: 3,
  ingrediente: ["sunca", "cas", "kechup"],
};
console.log(reteta);

// Function - EX 1:
function details(title, portionOfFood, ingredients) {
  this.title = title;
  this.portionOfFood = portionOfFood;
  this.ingredients = ingredients;
}
let recipe = new details("Pizza", 3, ["Sunca", "Cas", "Ketchup"]);
console.log(recipe);

//////////////
// EX 2:
const nums = {
  a: 1,
  b: 2,
};
delete nums.b;
console.log(nums);

// Function - EX 2:
let objectOriginal = {
  a: 1,
  b: 2,
};
let objectNew = (function ({ b, ...objectWanted }) {
  return objectWanted;
})(objectOriginal);
console.log(objectNew);
// let objectNew = (({b, ...objectWanted}) => objectWanted)(objectOriginal);
// console.log(objectNew);

//////////////

// EX 3:
function Book(title, author) {
  this.title = title;
  this.author = author;
  this.detailsOfBook = function () {
    return this.title + " wrriten by " + this.author;
  };
}
let books = new Book("Hobbitul", "J.R.R. Tolkien");
let result = books.detailsOfBook();
// console.log(result);

function Book2(title, author) {
  this.title = title;
  this.author = author;
  this.detailsOfBook = function () {
    return this.title + " wrriten by " + this.author;
  };
}
let books2 = new Book2("Title2", "Author2");
let result2 = books2.detailsOfBook();
// console.log(result2);

function book(action) {
  let read = 0;
  while (action > read) {
    return `You read ${result}`;
  }
  if (action === read) {
    return `You didn't read ${result2}  `;
  }
}
console.log(book(1));
console.log(book(0));
