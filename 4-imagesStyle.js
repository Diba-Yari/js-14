//todo1: Give all the images at even position a similar border color and style
//todo2: and all the images at odd position same border style but different from the even ones.
//*hint: iterate over the images using loops

const allImage = document.querySelectorAll("img");
for (let i = 0; i < allImage.length; i++) {
  if (i % 2 === 0) {
    allImage[i].style.color="red"
      allImage[i].style.margin="10px"
       allImage[i].style.border="10px solid red"
  }
  else{
    allImage[i].style.color="blue"
    allImage[i].style.margin="5px"
     allImage[i].style.border="10px solid blue"
  }
}
