const addBtn = document.querySelector(".addBtn");
const input = document.querySelector("input");
const taskList = document.querySelector(".taskList");
const counterToDo = document.querySelector("[data-name='todo']");
const counterDone = document.querySelector("[data-name='done']");

let toDoNumber = 0;

const addTask = () =>{

if (input.value ==="") return;

counterToDo.textContent = `Zadania do wykonania: ${++toDoNumber}`;
const task = document.createElement("li");
task.innerHTML = `${input.value} <span class="close tooltip">x</span>`;
taskList.appendChild(task);
input.value = "";
}

const btnAdd = (e) => {
    e.preventDefault;
    addTask();
}

const enterAdd = (e) =>{
    if (e.keyCode === 13){
        addTask();
    }
}

input.addEventListener("keydown", enterAdd);

addBtn.addEventListener("click", btnAdd);