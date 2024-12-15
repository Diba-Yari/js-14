//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

// const todo2=document.querySelector("p")

// const todo3=document.querySelector("#para1")
// const todo4=document.querySelector("#para2")
// const todo5=document.querySelector("#para3")
// const todo6=document.querySelector("#para4")

const todo7=document.querySelectorAll("p")

// for(let i=0;i<todo7.length;i++){
//     console.log( todo7[i].textContent);

// }

// todo6.textContent= "hi my name is diba";

// todo3.setAttribute("class","test")
// todo4.setAttribute("class","test")
// todo5.classList.add("test")
// todo6.classList.add("test")

// todo7.forEach((item)=>{
// item.style.color="darkblue"
// item.style.backgroundColor = "orange"
// item.style.fontFamily== "sans-serif"

// })




todo7.forEach((p, i) => {
    if (i=== 0 || i === 2) {
      p.style.color = "green"; 
    } else {
      p.style.color = "red"; 
    }
  });