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
  // console.dir(todoList)
  // console.log(todoList.childNodes[0].)
})


// Add a Reset button. After the Reset button is 
// clicked all items in the to-do list should be 
// removed. The input field should also be cleared 
// so that it doesn’t hold any text.


// why doesn't ipt.innerHTML = "" clear the value from the input box?
// only ipt.value = "" works. 
resetBtn.addEventListener('click', function(event) {
  todoList.innerHTML = ""
  ipt.value = ""
})
  
  
// Delete an item on Click

todoList.addEventListener('click', function deleteTodo(event) {
  todoList.removeChild(event.target)
})


