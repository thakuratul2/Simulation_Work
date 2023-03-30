const boxes = document.querySelectorAll(".box");
const box1 = document.querySelector('#box3');
const divImage = document.querySelector('.weightimg');
const imageTest = document.querySelector(".weight2");
let drag = null;
const position = [[30, -30], [20, -20], [-20, 20], [-30, 30]];
//Loop through each boxes element
// imageTest.addEventListener("dragstart", (e) => {
//   e.preventDefault(); //Prevent default behaviour
//   //box.classList.add("hovered");
//   
//   console.log('test')
// });
imageTest.addEventListener('dragover', (e) => {

  e.preventDefault();
  box1.style.background = "red";
  drag = e.target;
  console.log(drag);
})

boxes.forEach((box) => {
  //When a draggable element dragged over a box element

  //When a draggable element leaves box element
  // box.addEventListener("dragleave", () => {
  //   box.classList.remove("hovered");
  // });

  //When a draggable element is dropped on a box elemen
  box.addEventListener("drop", (e) => {
    e.preventDefault();
    if(e.target.className === 'box'){
    //divImage.removeChild(imageTest);
    // box.appendChild(imageTest);
    drag.parentNode.removeChild(drag);
    e.target.appendChild(drag);
    //box.classList.remove("hovered");
    console.log(e.target)
  }else{
    console.log('error');
  }
  });
});
