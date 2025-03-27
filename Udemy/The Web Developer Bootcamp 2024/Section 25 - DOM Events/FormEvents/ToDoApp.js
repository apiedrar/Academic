const todoForm = document.querySelector('#submition');
const todos = document.querySelector('#toDos');
const notes = document.querySelector('#notes');
const list = document.querySelector('#todoList');

todoForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    return createNewTodo();
})

function createNewTodo() {
    const newTodo = todos.value;
    const addNote = notes.value;
    const newBull = document.createElement('li');

    if (notes.value === ''){
        newBull.innerText = newTodo;
    } else {
        newBull.innerText = `${newTodo} - ${addNote}`;
    }

    list.append(newBull);
    todos.value = '';
    notes.value = '';

    const editBttn = document.createElement('button');
    editBttn.innerText = 'Modify';
    newBull.appendChild(editBttn);
    
    const removeBttn = document.createElement('button');
    removeBttn.innerText = 'Remove';
    newBull.appendChild(removeBttn);
}

/*function editTodo() {
    editBttn.addEventListener('click', function() {

    })
    }

function removeTodo() {

}*/