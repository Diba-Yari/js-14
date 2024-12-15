/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/
const colors = ["red", "aqua", "orange", "purple", "lightgreen"];

const prom1 = prompt("Write a text please 🤗");

let result = "";

for (let i = 0; i < prom1.length; i++) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  result += `<span style="color: ${randomColor};">${prom1[i]}</span>`;
}

document.body.innerHTML = `<p>${result}</p>`;
