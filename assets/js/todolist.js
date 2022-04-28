const form = document.querySelector("#form");
const task = document.querySelector("#task");
const todoTableBody = document.querySelector("#todoTableBody");

function createDoneBtn(tdLeft) {
	const doneBtn = document.createElement("button");
	doneBtn.textContent = "Terminé";
	doneBtn.onclick = function () {
		if (tdLeft.classList.contains("task-done")) {
			tdLeft.classList.remove("task-done");
		} else {
			tdLeft.classList.add("task-done");
		}
	};
	return doneBtn;
}

function createRemoveBtn(tr) {
	const removeBtn = document.createElement("button");
	removeBtn.textContent = "Supprimer";
	removeBtn.onclick = function () {
		tr.remove();
		getTodosCountMsg();
	};
	return removeBtn;
}

function getTodosCountMsg() {
	//recuperer le nombe de tr dans mon #todoTableBody
	const trTodos = document.querySelectorAll("#todoTableBody>tr");
	let todoCountMsg =
		trTodos.length > 1
			? trTodos.length + " tâches dans la liste"
			: "1 tâche dans la liste";
    document.querySelector('#todosCount').textContent = todoCountMsg;
}

function createUpdateBtn(tdLeft, todo){
    const updateBtn = document.createElement("button");
	updateBtn.textContent = "Modifier";
	updateBtn.onclick = function () {
		updateTodo (tdLeft, todo);
	};
	return updateBtn;
}

function updateTodo (tdLeft, todo){
    const updateInput = document.createElement('input');
    updateInput.placeholder=todo.value;
    tdLeft.textContent="";
    updateInput.onkeyup = function(e){
        if(e.key === "Enter"){
            tdLeft.textContent = this.value;
        }
    }

    tdLeft.appendChild(updateInput);
}

function createTdRight(tr, tdLeft, todo){
    const tdRight = document.createElement('td');
    tdRight.appendChild(createDoneBtn(tdLeft));
    tdRight.appendChild(createRemoveBtn(tr));
    tdRight.appendChild(createUpdateBtn(tdLeft, todo));

    return tdRight;
}

function displayTodo(todo){
    const tr = document.createElement('tr');
    const tdLeft = document.createElement('td');
    tdLeft.textContent = todo.value;

    tr.appendChild(tdLeft);
    tr.appendChild(createTdRight(tr, tdLeft, todo));

    todoTableBody.appendChild(tr);
}

function addTodo(todo){
    displayTodo(todo);
    todo.value=""
    todo.focus();
    getTodosCountMsg();
}

form.onsubmit = function(e){
    e.preventDefault();
    addTodo(task);
}
