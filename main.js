const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', function() {
  const task = taskInput.value;
  const taskItem = document.createElement('li');
  taskItem.setAttribute('contenteditable', false);
  taskItem.textContent = task;
  taskItem.style.marginRight = '10px';

  const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.alignItems = 'center';

  const deleteButton = document.createElement('button');
  
  const deleteIcon = document.createElement('i');
  deleteIcon.setAttribute('class', 'fas fa-trash-alt ');
  deleteButton.appendChild(deleteIcon);
  const editButton = document.createElement('button');

const editIcon = document.createElement('i');
editIcon.setAttribute('class', 'fas fa-edit');
editButton.appendChild(editIcon);

editButton.addEventListener('click', function(e) {
  taskItem.setAttribute('contenteditable', true);
  taskItem.style.backgroundColor = '#eee';

  taskItem.addEventListener('blur', function(e) {
    taskItem.setAttribute('contenteditable', false);
    taskItem.style.backgroundColor = 'transparent';
    taskItem.textContent = e.target.textContent;
  });
});

buttonContainer.appendChild(editButton);


  deleteButton.addEventListener('click', function(e) {
    taskList.removeChild(e.target.parentElement.parentElement);
  });
  
  buttonContainer.appendChild(deleteButton);
  taskItem.appendChild(buttonContainer);
  
  let taskExists = false;
  for (const task of taskList.children) {
    if (task.textContent === taskItem.textContent) {
      taskExists = true;
      break;
    }
  }
  
  if (!taskExists) {
    taskList.appendChild(taskItem);
  } else {
    alert('Task already exists');
  }
  
  taskInput.value = '';
});

taskList.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
});

taskList.addEventListener('blur', function(e) {
  if (e.target.tagName === 'LI') {
    const editedTask = e.target.textContent;
  }
});
