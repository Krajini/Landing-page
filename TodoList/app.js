document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const taskList = document.getElementById('task-list');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = input.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      input.value = '';
    }
  });

  function addTask(taskText) {
    const li = document.createElement('li');
    li.innerText = taskText;
    li.addEventListener('click', function() {
      li.classList.toggle('checked');
    });
    taskList.appendChild(li);
  }
});