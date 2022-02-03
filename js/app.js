// create cached element references for button, input, list

const btn = document.querySelector('#submit-button')
const resetBtn = document.querySelector('#reset-button')
const todoList = document.querySelector('#todo-list')
const ipt = document.querySelector('#user-input')

btn.addEventListener('click', function(event){
  // creat a new li element
  const newLi = document.createElement('li')
  // set the text of newLi to the input element
  newLi.textContent = ipt.value

  if(ipt.value !== '') {
    // reset the text in the input field
    ipt.value = ""
    // attach the newLi to the <ul>
    todoList.appendChild(newLi)
    }
})

// Add a Reset button. After the Reset button is 
// clicked all items in the to-do list should be 
// removed. The input field should also be cleared 
// so that it doesn’t hold any text.
resetBtn.addEventListener('click', function(event) {



})
  
  
  


//   // make a refernce to this when building Tic Tac Toe
// })

// document.querySelector('ul').addEventListener('click',  handleClick)

// //event delegation
// function handleClick(event) {
//   console.log(event)
// }

// document.querySelector('ul').addEventListener('click',  changeColor)

// function changeColor(event) {
//   // identify the target
//   // adjust font color
//   // const litoAdjust = event.target
//   // litoAdjust.style.color = 'lime'
//   event.target.style.color = 'lime'
// }


