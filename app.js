/* Adding to do */

// getting reference to the form class 'add'
const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

const generateTemplate = todo => {
    const html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="text-light">${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`

    list.innerHTML += html
}

// attach eventListener - submit
addForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const todo = addForm.add.value.trim()
    // check if user add 'nothing' if lenght is 0 - 0 is falsy value so it wont call generateTemplate function
    if (todo.length) {
        generateTemplate(todo)
        // reset формата, когато валидирам
        addForm.reset()
    }
})

/* Delete todos - WIll use event delegation */

// delete dotos
list.addEventListener('click', (e) => {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
})

/* Filtering todos */


const filterTodos = (term) => {
    // използвам array.from за да мога да използвам array methods, понеже list reference е HTML collection
    Array.from(list.children)
        .filter((item) => !item.textContent.toLowerCase().includes(term))
        .forEach((item) => item.classList.add('filtered'))


    Array.from(list.children)
        .filter((item) => item.textContent.toLowerCase().includes(term))
        .forEach((item) => item.classList.remove('filtered'))
}


// keyup event
search.addEventListener('keyup', () => {
    // Идеята е, всеки път, когато юзъра пише буква, да филтрира листа (fire the callback function)
    const term = search.value.trim().toLowerCase()
    filterTodos(term)
})