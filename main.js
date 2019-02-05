const addBtn = document.querySelector(".addBtn");
const input = document.querySelector("input");
const taskList = document.querySelector(".taskList");
const counterToDo = document.querySelector("[data-name='todo']");
const counterDone = document.querySelector("[data-name='done']");
let done;
let close;
let i = 0;

let toDoNumber = 0;
let doneNumber = 0;
let taskToDo = [...document.querySelectorAll("li")];

const doneTask = (li) =>{
    if (li.dataset.flag === "false"){
    doneNumber++;
    toDoNumber--;
    li.dataset.flag = "true";
    counterToDo.textContent = `Zadania do wykonania: ${toDoNumber}`;
    counterDone.textContent = `Zadania wykonane: ${doneNumber}`;
    li.classList.add("done");
    } else {
    doneNumber--;
    toDoNumber++;
    li.dataset.flag = "false";
    counterToDo.textContent = `Zadania do wykonania: ${toDoNumber}`;
    counterDone.textContent = `Zadania wykonane: ${doneNumber}`;
    li.classList.remove("done");
    }
}

const removeTask = (li) =>{
    localStorage.removeItem([li.dataset.key]);
if (li.dataset.flag === "false"){
    toDoNumber--;
    counterToDo.textContent = `Zadania do wykonania: ${toDoNumber}`;
    taskToDo.splice([li.dataset.key], 1)
    renderList();
} else {
    doneNumber--;
    counterDone.textContent = `Zadania wykonane: ${doneNumber}`;
    taskToDo.splice([li.dataset.key], 1)
    renderList();
}
}

const addTask = () =>{

    if (input.value ==="") return;

    counterToDo.textContent = `Zadania do wykonania: ${++toDoNumber}`;
    const task = document.createElement("li");
    task.innerHTML = `<span class="taskText">${input.value}</span> <span class="doneBtn"><i class="icon-ok"></i></span><span class="close tooltip"><i class="icon-cancel"></i></span>`;
    taskList.appendChild(task);

    taskToDo = [...document.querySelectorAll("li")];
    localStorage.setItem(taskToDo.length-1, input.value);
    renderList();
    input.value = "";
    
    close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = (e) => {
        let li = e.target.parentNode.parentNode;
        removeTask(li);
        }
    }

    done = document.getElementsByClassName("doneBtn");
    for (let i = 0; i < done.length; i++) {
        done[i].onclick = (e) => {
        let li = e.target.parentNode.parentNode;
        doneTask(li);
        }
    }
}

const btnAdd = (e) => {
    e.preventDefault;
    addTask();
};

const enterAdd = (e) =>{
    if (e.keyCode === 13){
        addTask();
    }
};

const renderList = () => {
    taskList.textContent = "";
    taskToDo.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        toDoElement.dataset.flag = false;
        let taskText = toDoElement.firstChild;
        taskText.innerText = localStorage.getItem( key );
        taskList.appendChild(toDoElement);
    })
   }



input.addEventListener("keydown", enterAdd);
addBtn.addEventListener("click", btnAdd);

