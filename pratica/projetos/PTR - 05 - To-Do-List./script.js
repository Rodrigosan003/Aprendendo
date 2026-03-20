const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// Carregar tarefas do localStorage ao iniciar
let todos = JSON.parse(localStorage.getItem("todos")) || [];
renderTodos();

// Adicionar nova tarefa
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = input.value.trim();

  if (task) {
    todos.push({ text: task, completed: false });
    input.value = "";
    saveAndRender();
  }
});

// Função para renderizar as tarefas
function renderTodos() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    if (todo.completed) li.classList.add("completed");

    // Botão para marcar como concluída
    li.addEventListener("click", () => {
      todos[index].completed = !todos[index].completed;
      saveAndRender();
    });

    // Botão para excluir
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      todos.splice(index, 1);
      saveAndRender();
    });

    li.appendChild(removeBtn);
    list.appendChild(li);
  });
}

// Salvar no localStorage e renderizar
function saveAndRender() {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}
