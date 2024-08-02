const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const dueDateInput = document.getElementById('dueDateInput');
const   
 prioritySelect = document.getElementById('prioritySelect');
const   
 categorySelect = document.getElementById('categorySelect');
const addTaskBtn = document.getElementById('addTaskBtn');
const filterDueDate = document.getElementById('filterDueDate');
const filterPriority = document.getElementById('filterPriority');
const filterCategory = document.getElementById('filterCategory');

let tasks = [];

// Load tasks from local storage on page load
loadTasks();

addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskClick);
filterDueDate.addEventListener('change', filterTasks);
filterPriority.addEventListener('change', filterTasks);
filterCategory.addEventListener('change', filterTasks);

function   
 addTask(event) {
    event.preventDefault(); // Prevent form submission and page reload

    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = prioritySelect.value;
    const category = categorySelect.value;

    if (taskText === '') return;

    const task = {
        text: taskText,
        dueDate: dueDate,
        priority: priority,
        category: category,
        completed: false
    };

    tasks.push(task);
    renderTasks();
    saveTasks();

    // Clear the form after adding a task
    taskInput.value = '';
    dueDateInput.value = '';
    prioritySelect.value = 'low';
    categorySelect.value = 'work'; 
}

function handleTaskClick(event) {
    const li = event.target.closest('li');
    if (!li) return;

    const taskIndex = Array.from(taskList.children).indexOf(li);

    if (event.target.classList.contains('delete')) {
        deleteTask(taskIndex);
    } else if (event.target.classList.contains('edit')) {
        editTask(taskIndex);
    } else {
        toggleComplete(taskIndex);
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
    saveTasks();
}

function editTask(index) {
    const newText = prompt('Edit task:', tasks[index].text);
    if (newText !== null) {
        tasks[index].text = newText.trim();
        renderTasks();
        saveTasks();
    }
}

function toggleComplete(index)   
 {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
    saveTasks();
}

function filterTasks() {
    const filterDate = filterDueDate.value;
    const filterPriorityValue = filterPriority.value;
    const filterCategoryValue = filterCategory.value;

    const filteredTasks = tasks.filter(task => {
        const dateMatch = !filterDate || task.dueDate === filterDate;
        const priorityMatch = filterPriorityValue === 'all' || task.priority === filterPriorityValue;
        const categoryMatch = filterCategoryValue === 'all' || task.category === filterCategoryValue;
        return dateMatch && priorityMatch && categoryMatch;
    });

    renderTasks(filteredTasks);
}

function renderTasks(tasksToRender = tasks) {
    taskList.innerHTML = ''; 

    tasksToRender.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add(`category-${task.category}`); 
        li.innerHTML = `
            <span class="task-text ${task.completed ? 'complete' : ''} ${'priority-' + task.priority}">${task.text} (Due: ${task.dueDate || 'No due date'}, Category: ${task.category})</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const   
 storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks();   

    }
}