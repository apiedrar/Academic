let ask = prompt('What would you like to do?');
const todolist = [];

while (ask !== 'quit' && ask !== 'q' && ask !== 'QUIT' && ask !== 'Q') {
    if (ask === 'list') {
        console.log('*****************');
        for (let i = 0; i < todolist.length; i++) {
            console.log(`${i}: ${todolist[i]}`);
        }
        console.log('*****************');
    }   else if (ask === 'new') {
        const todo = prompt('Enter new to-do');
        todolist.push(todo);
        console.log(`${todo} added to the list`);
    }   else if (ask === 'delete') {
        const del = parseInt(prompt('Type the index of the ToDo to be deleted'));
        if (!Number.isNaN(del)) {
        todolist.splice(del, 1);
        console.log('ToDo Removed');
        } else {
            console.log('Unknown index');
        }
    }
    ask = prompt('What would you like to do?');
}

console.log("You've succesfully quit the app");