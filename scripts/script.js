const paragraphs = document.querySelectorAll('p')
const myArray = Array.from(paragraphs)
const todos = [];

const filters = {
  searchTitle : '',
  showFinished: false,
  showUnfinished: false,
}

const setFilters = (updates) => {
  if (typeof updates.searchTitle === "string" ) {
    filters.searchTitle = updates.searchTitle
  }
  if (typeof updates.showFinished === "boolean" ) {
    console.log('test');
    filters.showFinished = updates.showFinished
  }
  if (typeof updates.showUnfinished === "boolean" ) {
    filters.showUnfinished = updates.showUnfinished
  }
} 

const createTodos = (text) => {
 todos.push({
   title: text,
   completed: false
 })
}

const form = document.querySelector('form')

function toggleTodo(title) {
  const todo = todos.find((todo) => todo.title === title)
  if (todo) {
    todo.completed = !todo.completed
  }
}

const generateTodoDOM = (todoObj) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type','checkbox')
    checkbox.checked = todoObj.completed
    removeButton.textContent = 'remove'
    removeButton.classList.add('button--text')
    
    todoText.textContent = todoObj.title;
    containerEl.appendChild(checkbox)
    containerEl.appendChild(todoText)
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    
    todoEl.appendChild(containerEl)
    todoEl.appendChild(removeButton)
    
    checkbox.addEventListener('change',function (){
      toggleTodo(todoObj.title)
      renderTodos(todos)
    })

    removeButton.addEventListener('click',()=>{ 
        removeTodo(todoObj.title)
        renderTodos(todos)
    })
    return todoEl;
}

// Render application todos based on filters
const renderTodos = (todos) => {
  // filtered Todos
  let filteredTodos = todos.filter((todo) => todo.title.toLowerCase().includes(filters.searchTitle.toLowerCase()))
  if(filters.showFinished && filters.showUnfinished) {
    // do nothing
  } else if(filters.showFinished) {
    filteredTodos = filteredTodos.filter((todo) => todo.completed)
  } else if(filters.showUnfinished) {
    filteredTodos = filteredTodos.filter((todo) => !todo.completed)
  }
  
  const todoList = document.querySelector('#todos')
  todoList.innerHTML = ''

  if (filteredTodos.length > 0) {
      filteredTodos.forEach((todo) => {
          todoList.appendChild(generateTodoDOM(todo))
      })
  } else {
      const messageEl = document.createElement('p')
      messageEl.classList.add('empty-message')
      messageEl.textContent = 'There are no todos to show'
      todoList.appendChild(messageEl)
  }
}
function removeTodo (title) {
    const todoIndex = todos.findIndex((todo)=> todo.title === title)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
    
}

renderTodos(todos)

document.querySelector("#search-text").addEventListener('input',(e)=>{
  setFilters({searchTitle: e.target.value})
  renderTodos(todos)
})

document.querySelector('#show-finished').addEventListener('change',(e)=>{
  setFilters({showFinished: e.target.checked})
  renderTodos(todos)
})
document.querySelector('#show-unfinished').addEventListener('change',(e)=>{
  setFilters({showUnfinished: e.target.checked})
  renderTodos(todos)
})


document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e);
    let text = e.target.elements.text.value.trim()
    if (text.length !== 0) {
        createTodos(text) 
        e.target.elements.text.value = ''
        renderTodos(todos)
    }

})

const saveTodosToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

function fetchTodosFromLocalStorage(){
    const todosJSON = window.localStorage.getItem('todos')
    if (todosJSON.length !== 0){
        todos = JSON.parse(todosJSON)
    }
    else {
        todos = []
    }
}