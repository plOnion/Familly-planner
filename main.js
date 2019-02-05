const addBtn = document.querySelector(".addBtn");
const input = document.querySelector("input");
const taskList = document.querySelector(".taskList");
const counterToDo = document.querySelector("[data-name='todo']");
const counterDone = document.querySelector("[data-name='done']");
let done;
let close;
// let flag = false;

let toDoNumber = 0;
let doneNumber = 0;
let taskToDo = [...document.querySelectorAll("li")];

const doneTask = (i) =>{
    if (done[i].parentNode.dataset.flag === "false"){
    doneNumber++;
    toDoNumber--;
    done[i].parentNode.dataset.flag = "true";
    counterToDo.textContent = `Zadania do wykonania: ${toDoNumber}`;
    counterDone.textContent = `Zadania wykonane: ${doneNumber}`;
    done[i].parentNode.classList.add("done");
    } else {
    doneNumber--;
    toDoNumber++;
    done[i].parentNode.dataset.flag = "false";
    counterToDo.textContent = `Zadania do wykonania: ${toDoNumber}`;
    counterDone.textContent = `Zadania wykonane: ${doneNumber}`;
    done[i].parentNode.classList.remove("done");
    }
}

const removeTask = (i) =>{
if (close[i].parentNode.dataset.flag === "false"){
    toDoNumber--;
    counterToDo.textContent = `Zadania do wykonania: ${toDoNumber}`;
    taskToDo.splice([i], 1)
    renderList();
    close = document.getElementsByClassName("close");
}
}

const addTask = () =>{

    if (input.value ==="") return;

    counterToDo.textContent = `Zadania do wykonania: ${++toDoNumber}`;
    const task = document.createElement("li");
    task.innerHTML = `<span class="taskText">${input.value}</span> <span class="doneBtn"><i class="icon-ok"></i></span><span class="close tooltip"><i class="icon-cancel"></i></span>`;
    taskList.appendChild(task);
    input.value = "";
    taskToDo = [...document.querySelectorAll("li")];
    renderList();
    
    close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = () => {
        removeTask(done[i].parentNode.dataset.key);
        }
    }

    done = document.getElementsByClassName("doneBtn");
    for (let i = 0; i < done.length; i++) {
        done[i].onclick = () => {
        doneTask(i);
        }
    }
}

const btnAdd = (e => {
    e.preventDefault;
    addTask();
})

const enterAdd = (e) =>{
    if (e.keyCode === 13){
        addTask();
    }
}

const renderList = () => {
    taskList.textContent = "";
    taskToDo.forEach((toDoElement, key) => {
     toDoElement.dataset.key = key;
     toDoElement.dataset.flag = false;
     taskList.appendChild(toDoElement);
    })
   }

input.addEventListener("keydown", enterAdd);
addBtn.addEventListener("click", btnAdd);

// taskToDo.forEach(e =>{
//     console.log("dziala");
// })