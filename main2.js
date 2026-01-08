function buildGrid() {
  const cols = Math.ceil(window.innerWidth / 100) + 1;
  const rows = Math.ceil(window.innerHeight / 100) + 1;
  const totalCells = cols * rows;

  const cells = [];

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    document.body.appendChild(cell);
    cells.push(cell);
  }

  setInterval(() => {
    cells.forEach((c) => c.classList.remove("hovered"));
    for (let i = 0; i < 5; i++) {
      const randIndex = Math.floor(Math.random() * totalCells);
      cells[randIndex].classList.add("hovered");
    }
  }, 1000);
}

buildGrid();
window.addEventListener("resize", buildGrid);

// element.addEventListener("mouseenter", () => {
//   element.classList.add("hover");
// });
// element.addEventListener("mouseleave", () => {
//   element.classList.remove("hover");
// });
let user = [
  { nick: "admin", password: "admin123" },
  { nick: "umar", password: "user123" },
];
function Submit(event) {
  event.preventDefault();

  let name = document.getElementById("nick").value;
  let email = document.getElementById("email").value;
  let password1 = document.getElementById("password1").value;
  for (let i = 0; i < user.length; i++) {
    if (user[i].nick === name && user[i].password === password1) {
      text = "Добро пожаловать, " + name + "!" + "Приятного пользования сайтом";
      let utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
      alert(text);
      window.location.href = "./index.html";

      return;
    } else {
      alert(
        "Неверное имя пользователя или пароль. Пожалуйста, попробуйте еще раз."
      );
      return;
    }

    alert("Форма успешно отправлена");
  }
}
