const input = document.querySelector('#input');
const add = document.querySelector('#add');
const toDo = document.querySelector('#toDo');
const clean = document.querySelector('#clean');

window.addEventListener('load', () => {
    if (localStorage.getItem('tasks')) {
        toDo.innerHTML = localStorage.getItem('tasks');
        clean.disabled = false;
    } else {
        toDo.innerHTML = '<p id="noTask">Создайте новую задачу</p>';
        clean.disabled = true;
    }
});

add.addEventListener('click', () => {
    addTask();
});

input.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        addTask();
    }
});

clean.addEventListener('click', () => {
    toDo.innerHTML = '<p id="noTask">Создайте новую задачу</p>';
    clean.disabled = true; 
    localStorage.removeItem('tasks');
});

toDo.addEventListener('change', () => {
    updateLocalStorage();
});

function addTask() {
        if (input.value !== "") {
        if (toDo.innerHTML === '<p id="noTask">Создайте новую задачу</p>') {
            toDo.innerHTML = ""; 
            clean.disabled = false;
        }
    toDo.innerHTML += '<div id="containerTask">' + '<input type="checkbox" id="task">' + input.value + '</div>';
    input.value = "";
    updateLocalStorage();
    }
}

function updateLocalStorage() {
    localStorage.setItem('tasks', toDo.innerHTML);
}




