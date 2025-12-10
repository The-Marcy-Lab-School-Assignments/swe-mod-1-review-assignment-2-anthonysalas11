const books = [
  { title: "The Fire Next Time", author: "James Baldwin", pages: 224, available: true, checkouts: 45 },
  { title: "Sister Outsider", author: "Audre Lorde", pages: 192, available: false, checkouts: 38 },
  { title: "The Autobiography of Malcolm X", author: "Malcolm X", pages: 466, available: true, checkouts: 52 },
  { title: "I Know Why the Caged Bird Sings", author: "Maya Angelou", pages: 289, available: true, checkouts: 67 },
  { title: "The Souls of Black Folk", author: "W.E.B. Du Bois", pages: 264, available: false, checkouts: 41 },
  { title: "Their Eyes Were Watching God", author: "Zora Neale Hurston", pages: 219, available: true, checkouts: 59 }
];

// A: Use filter to get all available books and store them in a variable called `availableBooks`.
const availableBooks = books.filter((book) => book.available === true);

// B: Use map on the `availableBooks` array to create a new array called `availableTitles` containing just the titles of available books.
const availableTitles = books.map((book) => book.title);


// C: Chain filter and map together in a single expression to get the title s of all books with more than 50 checkouts. Store this in a variable called `popularBookTitles`.
const popularBookTitles = books.filter((book) => book.checkouts > 50).map((book) => book.title)


// // D: Use reduce to calculate the total number of checkouts across ALL books. Store this in a variable called `totalCheckouts`.
     const totalCheckouts = books.reduce((acc,currVal)  => acc + currVal.checkouts ,0)

  console.log(totalCheckouts)
   

// // E: Use reduce to find the highest number of checkouts any single book has received. Store this in a variable called `mostCheckouts`.
// // Hint: Start with 0 and compare each book's checkouts to your accumulator. If the book's checkouts are higher, return that number; otherwise, return the current accumulator.
// const mostCheckouts = books.reduce((max, currBook) => {
//   if (currBook.checkouts > acc){
//     return currBook.checkouts
//   }else {
//     return max
//   }
// },0) 
// 









//  const totalCheckouts = books.reduce((acc,currVal)  => acc + currVal.checkouts ,0)
