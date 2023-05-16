// EX 1:
const reteta = {
  titlu: "Pizza",
  portii: 3,
  ingrediente: ["Sunca", "Cas", "Ketchup"],
};
console.log(reteta);

// Function - EX 1:
function details(title, portionOfFood, ingredients) {
  let obj = {};
  obj.title = title;
  obj.portionOfFood = portionOfFood;
  obj.ingredients = ingredients;
  return obj;
}
console.log(details("Pizza", 3, ["Sunca", "Cas", "Ketchup"]));

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

// // EX 3:
// function Book(title, author) {
//   this.title = title;
//   this.author = author;
//   this.detailsOfBook = function () {
//     return this.title + " wrriten by " + this.author;
//   };
// }
// let books = new Book("Hobbitul", "J.R.R. Tolkien");
// let result = books.detailsOfBook();
// // console.log(result);

// function Book2(title, author) {
//   this.title = title;
//   this.author = author;
//   this.detailsOfBook = function () {
//     return this.title + " wrriten by " + this.author;
//   };
// }
// let books2 = new Book2("Title2", "Author2");
// let result2 = books2.detailsOfBook();
// // console.log(result2);

// function book(action) {
//   let read = 0;
//   while (action > read) {
//     return `You read ${result}`;
//   }
//   if (action === read) {
//     return `You didn't read ${result2}  `;
//   }
// }
// console.log(book(1));
// console.log(book(0));

// EX 3:
let book1 = {
  title: "title1",
  author: "author1",
  read: true,
};
let book2 = {
  title: "title2",
  author: "author2",
  read: false,
};
let book3 = {
  title: "title3",
  author: "author3",
  read: true,
};
let books = [
  {
    title: "title4",
    author: "author4",
    read: false,
  },
];

books.push(book1, book2, book3);

for (let i = 0; i < books.length; i++) {
  if (books[i].read === true) {
    console.log(`You read ${books[i].title} by ${books[i].author}`);
  } else {
    console.log(`You didn't read ${books[i].title} by ${books[i].author}`);
  }
}
