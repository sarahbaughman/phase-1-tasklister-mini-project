document.addEventListener("DOMContentLoaded", () => {
  
});


 

document.addEventListener("DOMContentLoaded", () => { 

  const createTaskForm = document.getElementById ('create-task-form') 
  createTaskForm.addEventListener( 'submit' , addNewTask) 
}) 
  
function addNewTask (event) { 

  event.preventDefault() 
  const ulTasks = document.getElementById( 'tasks' ) 
  const liTask = document.createElement ( 'li') 
  ulTasks.appendChild( liTask) 
  let taskForm = event.target 
  liTask.textContent = taskForm['new-task-description'].value

} 
