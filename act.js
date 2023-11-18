const todoList = [];

renderTodoList();

function renderTodoList() {
    let todoListHTML = "";

    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
                <div>${name}</div>
                <div> ${dueDate} </div>
                <button class="delete-button js-delete-todo-button">Delete</button>
                `;
        todoListHTML += html;
    });
    document.querySelector(".js-list-display").innerHTML = todoListHTML;

    document
        .querySelectorAll(".js-delete-todo-button")
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener("click", () => {
                todoList.splice(index, 1);
                renderTodoList();
            });
        });
}

document.querySelector(".js-add-button").addEventListener("click", () => {
    addTodo();
});

function addTodo() {
    const inputElement = document.querySelector(".js-name-input");
    const name = inputElement.value;
    //console.log(name);

    const dateIput = document.querySelector(".js-due-date-input");

    const dueDate = dateIput.value;

    todoList.push({
        name: name,
        dueDate: dueDate,
        name,
        dueDate,
    });
    //console.log(todoList);

    //reset the input
    inputElement.value = "";
    dateIput.value = "";
    renderTodoList();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}