//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
//todo2: Completed challenge has background green
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red

// todo1
const heading = document.querySelector("h1");

function changeColor() {
  const colors = [
    "blue",
    "green",
    "orange",
    "red",
    "purple",
    "pink",
    "darkblue",
  ];
  const random = Math.floor(Math.random() * colors.length);
  heading.style.color = colors[random];
}
setInterval(changeColor, 1000);

// todo2
const background = document.querySelectorAll("ul li");
for (let i = 0; i < background.length; i++) {
  if (background[i].textContent.includes("Done")) {
    background[i].style.backgroundColor = "green";
  }
}

// to do 3

for (let i = 0; i < background.length; i++) {
  if (background[i].textContent.includes("Ongoing")) {
    background[i].style.backgroundColor = "yellow";
  }
}

// todo 4
for (let i = 0; i < background.length; i++) {
  if (background[i].textContent.includes(" Coming")) {
    background[i].style.backgroundColor = " red";
  }
}
