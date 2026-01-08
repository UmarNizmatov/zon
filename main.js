let products2 = [];
function Noleft() {
  alert("Товар отсутствует");
}

function addTokart(product_name, price) {
  alert("Товар добавлен в корзину");

  const product = products2.find(
    (p) => p.name.toLowerCase() === product_name.toLowerCase()
  );

  if (product) {
    product.count++;
  } else {
    products2.push({ name: product_name, price: price, count: 1 });
  }

  console.log(products2);
}
function showCart() {
  if (products2.length === 0) {
    alert("🛒 Корзина пуста");
    return;
  }

  let message = "🛒 Ваша корзина:\n\n";
  let total = 0;

  for (let i = 0; i < products2.length; i++) {
    let p = products2[i];
    let sum = p.price * p.count;
    total += sum;

    message +=
      `${i + 1}. ${p.name}\n` +
      `   Количество: ${p.count}\n` +
      `   Цена: ${p.price.toLocaleString()} сум\n` +
      `   Сумма: ${sum.toLocaleString()} сум\n\n`;
  }

  message += `💰 Итого: ${total.toLocaleString()} сум`;

  alert(message);
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".enterence").style.display = "none";
  }, 5000);
});


const ratings = document.querySelectorAll(".rating");

ratings.forEach((rating) => {
  const stars = rating.querySelector(".stars");
  const fill = stars.querySelector(".fill");
  const value = rating.querySelector(".value");
  const max = 5;

  let fixedRating = null;

  stars.addEventListener("mousemove", (e) => {
    const rect = stars.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const hoverWidth = Math.min(Math.max(percent, 0), 1) * 100;
    fill.style.width = hoverWidth + "%";
    if (!fixedRating) {
      value.textContent = ((hoverWidth / 100) * max).toFixed(1);
    }
  });

  stars.addEventListener("click", (e) => {
    const rect = stars.getBoundingClientRect();
    let ratingValue = ((e.clientX - rect.left) / rect.width) * max;
    ratingValue = Math.round(ratingValue * 10) / 10;

    fixedRating = ratingValue;
    fill.style.width = (fixedRating / max) * 100 + "%";
    value.textContent = fixedRating.toFixed(1);
  });

  stars.addEventListener("mouseleave", () => {
    if (fixedRating !== null) {
      fill.style.width = (fixedRating / max) * 100 + "%";
      value.textContent = fixedRating.toFixed(1);
    } else {
      fill.style.width = "0%";
      value.textContent = "0.0";
    }
  });
});
//exam start
class Movie {
  constructor(title, genre, duration, availableSeats) {
    this.title = title;
    this.genre = genre;
    this.duration = duration;
    this.availableSeats = availableSeats;
  }

  getDetails() {
    return `
Film: ${this.title}
Janr: ${this.genre}
Davomiyligi: ${this.duration} minut
Mavjud orinlar: ${this.availableSeats}
    `;
  }

  bookSeat() {
    if (this.availableSeats > 0) {
      this.availableSeats--;
      return "Orin band qilindi ✅";
    } else {
      return "Bosh orinlar yoq ❌";
    }
  }

  cancelSeat() {
    this.availableSeats++;
    return "Orin bekor qilindi ";
  }
}

const movie1 = new Movie("Avatar", "Fantastika", 162, 5);

console.log(movie1.getDetails());
console.log(movie1.bookSeat());
console.log(movie1.bookSeat());
console.log(movie1.cancelSeat());
console.log(movie1.getDetails());

class Theater {
  constructor(name, movies) {
    this.name = name;
    this.movies = movies;
  }
  addMovie(movie) {
    if (
      this.movies.some(
        (m) => m.title.toLowerCase() === movie.title.toLowerCase()
      )
    ) {
      console.log("Bunday film allaqachon qo'shilgan");
      return;
    }
    this.movies.push(movie);
  }
  removeMovie(title) {
    this.movies = this.movies.filter(
      (m) => m.title.toLowerCase() !== title.toLowerCase()
    );
  }
  listAvailableMovies() {
    return this.movies.filter((m) => m.availableSeats > 0);
  }
  searchByGenre(genre) {
    return this.movies.filter((m) =>
      m.genre.toLowerCase().includes(genre.toLowerCase())
    );
  }
}
class User {
  constructor(name, bookedMovies) {
    this.name = name;
    this.bookedMovies = bookedMovies;
  }
  bookMovie(movie) {
    if (
      this.bookedMovies.some(
        (m) => m.title.toLowerCase() === movie.title.toLowerCase()
      )
    ) {
      return "Bunday film allaqachon booked bogan";
    } else if (movie.bookSeat().includes("Orin band qilindi")) {
      this.bookedMovies.push(movie);
      return "Film booked qilindi";
    } else {
      return "Bosh joy qolmadi";
    }
  }

  cancelBooking(movie) {
    if (
      this.bookedMovies.some(
        (m) => m.title.toLowerCase() === movie.title.toLowerCase()
      )
    ) {
      this.bookedMovies = this.bookedMovies.filter(
        (m) => m.title !== movie.title
      );
      return movie.cancelSeat();
    } else {
      return "Bunday film yoq booked royxatingizda";
    }
  }
}

let students = [
  {
    name: "Ali",
    grades: [85, 90, 88],
  },
  {
    name: "Vali",
    grades: [92, 95, 94],
  },
  {
    name: "Sardor",
    grades: [78, 80, 75],
  },
  {
    name: "Dilshod",
    grades: [88, 91, 89],
  },
  {
    name: "Aziza",
    grades: [96, 97, 95],
  },
  {
    name: "Malika",
    grades: [83, 85, 82],
  },
  {
    name: "Bekzod",
    grades: [90, 92, 91],
  },
  {
    name: "Jasmin",
    grades: [87, 89, 90],
  },
  {
    name: "Akmal",
    grades: [70, 72, 68],
  },
  {
    name: "Nodira",
    grades: [93, 94, 92],
  },
];
function addStudent(students, name, grades) {
  return students.push({ name, grades });
}
function getAverageGrade(students) {
  return students.map((i) => ({
    name: i.name,
    averageGrade: i.grades.reduce((a, b) => a + b, 0) / i.grades.length,
  }));
}

function averageGrademorethan90(students) {
  return students.filter((s) => s.averageGrade > 90);
}
function SortByAverageGrade(students) {
  return students.sort((a, b) => b.averageGrade - a.averageGrade);
}
console.log(getAverageGrade(students));
console.log(averageGrademorethan90(getAverageGrade(students)));
console.log(SortByAverageGrade(getAverageGrade(students)));
let products = [
  { id: 1, name: "Smartphone", price: 1200, stock: 10 },
  { id: 2, name: "Laptop", price: 2500, stock: 5 },
  { id: 3, name: "Headphones", price: 150, stock: 20 },
  { id: 4, name: "Keyboard", price: 80, stock: 15 },
  { id: 5, name: "Mouse", price: 60, stock: 25 },
  { id: 6, name: "Monitor", price: 400, stock: 7 },
  { id: 7, name: "Tablet", price: 900, stock: 12 },
  { id: 8, name: "Charger", price: 40, stock: 30 },
  { id: 9, name: "USB Cable", price: 15, stock: 50 },
  { id: 10, name: "Smartwatch", price: 300, stock: 8 },
];
function avaibleProducts(products) {
  return products.filter((p) => p.stock > 0);
}
function totalValue(products) {
  return products.map((p) => ({
    name: p.name,
    totalValue: p.price * p.stock,
  }));
}
function totalInventoryValue(products) {
  // return products.reduce((total, p) => total + p.price * p.stock, 0);
  return products.reduce((total, p) => total + p.totalValue, 0);
}
function sortByprice(products) {
  // return products.sort((a, b) => b.totalValue - a.totalValue);
  return products.sort((a, b) => b.price - a.price);
}
console.log(avaibleProducts(products));
console.log(totalValue(avaibleProducts(products)));
console.log(
  `Umumiy inventar qiymati ${totalInventoryValue(
    totalValue(avaibleProducts(products))
  )}`
);
console.log(sortByprice(avaibleProducts(products)));
let halls = [
  { title: "Hall A", totalSeats: 120, reservedSeats: 45 },
  { title: "Hall B", totalSeats: 80, reservedSeats: 60 },
  { title: "Hall C", totalSeats: 150, reservedSeats: 90 },
  { title: "Hall D", totalSeats: 60, reservedSeats: 20 },
  { title: "Hall E", totalSeats: 200, reservedSeats: 150 },
  { title: "Hall F", totalSeats: 100, reservedSeats: 40 },
  { title: "Hall G", totalSeats: 75, reservedSeats: 30 },
  { title: "Hall H", totalSeats: 50, reservedSeats: 10 },
  { title: "Hall I", totalSeats: 180, reservedSeats: 120 },
  { title: "Hall J", totalSeats: 90, reservedSeats: 55 },
];
function availableSeats(halls) {
  return halls.map((h) => ({
    title: h.title,
    availableSeats: h.totalSeats - h.reservedSeats,
  }));
}
function availablehalls(halls) {
  // return halls.filter((h)=>h.availableSeats>0);
  return halls.filter((h) => h.totalSeats - h.reservedSeats > 0);
}
function sortByAvailableSeats(halls) {
  return halls.sort((a, b) => b.availableSeats - a.availableSeats);
}
function bookSeatInHall(halls, title) {
  if (
    halls.some(
      (h) =>
        h.title.toLowerCase() === title.toLowerCase() &&
        h.totalSeats - h.reservedSeats > 0
    )
  ) {
    halls = halls.map((h) => {
      h.title.toLowerCase() === title.toLowerCase() ? h.reservedSeats++ : h;
      return h;
    });
    return halls;
  } else {
    return "Bunday kino yoq yoki bo'sh joy qolmadi";
  }
}
console.log(availableSeats(halls));
console.log(availablehalls(halls));
console.log(sortByAvailableSeats(availableSeats(halls)));
console.log(bookSeatInHall(halls, "Hall A"));

let str = "Hello, World! Welcome to the world of JavaScript";
function toArray(str) {
  return str.split(" ");
}
function WordsLength(arr) {
  return arr.map((w) => ({ word: w, length: w.length }));
}
function longestWord(arr) {
  return arr.sort((a, b) => b.length - a.length)[0];
}
let str2 = "JavaScript is a versatile programming language aziza";
function toArray(str) {
  return str.split(" ");
}
function PalindromeWords(arr) {
  return arr.filter(
    (w) => w.toLowerCase() === w.toLowerCase().split("").reverse().join("")
  );
}
console.log(toArray(str));
console.log(WordsLength(toArray(str)));
console.log(longestWord(WordsLength(toArray(str))));
console.log(toArray(str2));
console.log(PalindromeWords(toArray(str2)));
console.log(PalindromeWords(toArray(str2)).length);

function letterToarrayandToLowercase(str) {
  return str.toLowerCase().split("");
}
function lettersCount(arr) {
  let letterCount = {};
  arr.forEach((letter) => {
    if (letter.match(/[a-z]/)) {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
  });
  return letterCount;
}
function mostFrequentLetter(letterCount) {
  return Object.entries(letterCount).sort((a, b) => b[1] - a[1])[0];
}
function letterToarray(str) {
  return str.split("");
}
function LettersToCode(arr) {
  return arr.map((l) => (l != " " ? l.charCodeAt() : l));
}
function OddIndexLetters(arr) {
  return arr.filter((l, i) => i % 2 != 0);
}
function reverseArray(arr) {
  return arr.reverse();
}
