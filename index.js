// Write your code here!
// const element = document.createElement("div");
// document.body.append(element);

// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
// }

// element.append(ul);

// const element = document.getElementById("main");
// element.style.height = "300px";
// element.style.backgroundColor = "#27647B";
// element.textContent = "THE ONE PIECE";
// element.style.fontSize = "50px"
// element.style.color ="#5055"
// element.style.display = "flex"
// element.style.alignItems ="center"
// element.style.justifyContent = "center"
// element.style.textAlign ="center"
// element.style.textDecoration = "underline 1px"
const main = document.querySelector("main")
main.remove();

let newHeader = document.createElement("h1")
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion"