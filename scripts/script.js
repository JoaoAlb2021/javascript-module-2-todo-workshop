/////////////////JavaScript in browser/////////////

///////Exercise 2////////////

// let myElement = document.querySelector('.container')
// console.log(myElement);

///////Exercise 3////////////

// let myElement = document.querySelector('.button')
// myElement.style.backgroundColor = 'green';
// myElement.addEventListener('submit', (event) => {
//     event.preventDefault();
// })

///////Exercise 4////////////

const textBox = document.querySelector('#new-todo')
textBox.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = e.target.elements.text.value.trim();
    console.log(text);;
})

///////Exercise 5////////////

const todos = [];
const createTodo = (text) => {
    todos.push(text)
}
const form = document.querySelector('#new-todo')
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const input = event.target.elements.text.value.trim()
    if (input.length !== 0){
        createTodo(input)
        event.target.elements.text.value = ''
    }
    console.log(todos);
})

///////Exercise 6////////////

const generateTodoDOM = (todo) => {
    const todoE1 = document.createElement('label')
    const containerE1 = document.createElement('div')
    const todoText = document.createElement('span')

    todoText.textContent = todo
    containerE1.appendChild(todoText)
    todoE1.appendChild(containerE1) 

    containerE1.classList.add('list-item_container')
    todoE1.classList.add('list-item')
    return todoE1
}

///////Exercise 7////////////

// const renderTodos = (todos) => {
//     const todoList = document.querySelector('#todos')
//     todoList.innerHTML = ''

//     todos.forEach((todo) => {
//         todoList.appendChild(generateTodoDOM(todo))
//     });
// }

///////Exercise 8////////////

const renderTodos = (todos) => {
    const todoList = document.querySelector('#todos')
    todoList.innerHTML = ''

    if (todos.lenght !== 0)
        todos.forEach((todo) => {
            todoList.appendChild(generateTodoDOM(todo))
        });
    else {
        const messageE1 = document.createElement(p)
        message.classList.add('empty-message')
        message.textContent = 'There are no todos to show'
        todoList.appendChild(messageE1)
    }
}

renderTodos(todos);

// const container = document.querySelector('.container');
// const allDiv = document.querySelectorAll('div')
// console.log('this is the container',allDiv);

// const button = document.querySelector('.button')
// console.log(button);

// const button = document.querySelector('.button')
// button.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     button.style.backgroundColor = 'green'
// })









/////////////////Objects in JavaScript//////////////////

////////Excersice 11///////////

// const todos =[];
// const createTodo = (text) => {
//     todos.push({
//         title: text,
//         completed: false
//     })
// }

////////Excersice 12//////////
