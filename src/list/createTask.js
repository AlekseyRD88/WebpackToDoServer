import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';
  //const tasksList = getItem('tasksList') || [];
  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };
  createTask(newTask);
};
