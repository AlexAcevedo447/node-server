import readLineSync from "readline-sync";

import { TaskModel, addTask, completeTask, deleteTask, initializeTaskList, modifyTask, showTasks } from "./task_model.mjs";

initializeTaskList();

/**
 * 
 * @param {TaskModel} task 
 */
export const addTaskController = (task) => {
    const added = addTask(task);
    if (added === 1) {
        console.log("Task successfully created!");
        showTaskController();
    } else {
        console.log("An error has ocurred");
    }
}

/**
 * 
 * @param {TaskModel} task 
 */
export const modifyTaskController = (task) => {
    const modified = modifyTask(task);
    if (modified === 1) {
        console.log("Task successfully modified!");
        showTaskController();
    } else {
        console.log("An error has ocurred");
    }
}

/**
 * 
 * @param {number} id 
 */
export const deleteTaskController = (id) => {
    const confirm = readLineSync.keyInYNStrict("Are you sure you want to delete task with id " + id + "? ");
    if (confirm) {
        const deleted = deleteTask(id);
        if (deleted === 1) {
            console.log(`Task with id ${id} successfully deleted!`);
            showTaskController();
        } else {
            console.log(`task with id ${id} does not exist`);
        }
    } else {
        return;
    }
}

/**
 * 
 * @param {number} id 
 */
export const completeTaskController = (id) => {
    const completed = completeTask(id);
    if (completed === 1) {
        console.log(`Task with id ${id} was marked as completed!`);
        showTaskController();
    } else {
        console.log("An error has ocurred");
    }
}

/**
 * 
 * @param {number} id 
 */
export const showTaskController = (id) => {
    const shown = showTasks(id);
    if (!shown) {
        console.log("task with id " + id + " does not exist");
    } else {
        console.log(shown);
    }

}