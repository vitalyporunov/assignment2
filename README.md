# JavaScriot Assignment: To-do list

Project Concept
The To-Do List project aims to create a simple yet effective web-based application that helps users manage their tasks and stay organized. It provides essential features for adding, editing, deleting, completing, filtering, and categorizing tasks. The project prioritizes user-friendliness, visual appeal, and responsiveness across different devices.

Features
Add Task: Users can add new tasks with details like task description, due date, priority, and category.
Mark Complete: Tasks can be marked as complete, visually indicating progress.
Edit Task: Existing tasks can be edited to update details or correct mistakes.
Delete Task: Tasks that are no longer relevant can be deleted.
Set Due Date: Users can assign due dates to tasks for prioritization.
Assign Priority: Tasks can be assigned priority levels (high, medium, low) for focus.
Filter Tasks: The task list can be filtered by due date, priority, or category for easy navigation.
Categorize Tasks: Tasks can be categorized (e.g., work, personal) for better organization.
Responsive Design: The application adapts to different screen sizes for optimal viewing on various devices.
Material Design: The visual style adheres to Material Design guidelines for a modern and aesthetically pleasing interface.

Core functionality should address the following user stories: 
As a user, I want to be able to add a new task to my to-do list so that I can keep track of my tasks.
As a user, I want to be able to mark a task as complete so that I can see my progress and focus on remaining tasks.
As a user, I want to be able to edit an existing task so that I can update its details or correct any mistakes.
As a user, I want to be able to delete a task from my to-do list so that I can remove tasks that are no longer relevant.
As a user, I want to be able to set a due date for a task so that I can prioritize tasks based on their deadlines.
As a user, I want to be able to assign a priority level (e.g., high, medium, low) to a task so that I can focus on the most important tasks first.
As a user, I want to be able to filter my to-do list by due date or priority so that I can easily find the tasks I need to focus on.
As a user, I want to be able to categorize my tasks (e.g., work, personal, etc.) so that I can better organize my to-do list.

Accessing the Hosted Project
To access the project, you will need to go this website: https://vitalyporunov.github.io/assignment2/

Design Decisions
Material Design: Material Design was chosen for its clean, modern aesthetic and well-defined guidelines, promoting a consistent and user-friendly experience.
Responsive Design: Responsiveness was implemented using CSS media queries to ensure the application works well on various devices, from desktops to mobile phones.
Minimalistic UI: The user interface was kept minimalistic to avoid overwhelming users and focus on core functionality.

Development Process
HTML Structure: The HTML structure was created to define the basic layout of the application, including the navigation, task list, and form elements.
CSS Styling: CSS was used to style the elements according to Material Design principles and implement responsiveness.
JavaScript Interactivity: JavaScript was employed to add interactivity and dynamic behavior, including:
Form handling: Capturing form submissions and preventing default behavior.
DOM manipulation: Creating, updating, and removing elements in the task list.
Event handling: Responding to user interactions like clicks and changes in filter options.

Challenges Faced & Solutions
Dynamic List Rendering: Efficiently rendering and updating the task list as tasks are added, edited, deleted, or filtered required careful DOM manipulation.
Responsive Design: Adapting the layout to various screen sizes while maintaining visual appeal and usability required the use of media queries and flexible layout techniques.

Implementation of Interactivity using JavaScript
JavaScript played a crucial role in making the To-Do List application interactive and dynamic. Here's how interactivity was implemented:
Event Listeners: Event listeners were attached to various elements (buttons, input fields, filter dropdowns) to capture user interactions and trigger corresponding functions.
DOM Manipulation: The Document Object Model (DOM) was manipulated to dynamically create, update, and remove elements in the task list as tasks are added, edited, deleted, or filtered.
Form Handling: The "Add Task" form was processed using JavaScript to prevent default submission behavior and capture user input.
Filtering and Sorting: JavaScript implemented the filtering and sorting logic based on user selections in the filter options.
