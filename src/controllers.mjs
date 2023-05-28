import readLineSync from "readline-sync";

import { TaskModel, addTask, completeTask, deleteTask, modifyTask, showTasks } from "./task_model.mjs";

/**
 * 
 * @param {TaskModel} task 
 */
export const addTaskController = async (task) => {
    const added = await addTask(task)
    if (added === 1) {
        console.log("Task successfully created!");
        await showTaskController();
    } else {
        console.log("An error has ocurred");
    }
}

/**
 * 
 * @param {TaskModel} task 
 */
export const modifyTaskController = async (task) => {
    const modified = await modifyTask(task);
    if (modified === 1) {
        console.log("Task successfully modified!");
        await showTaskController();
    } else {
        console.log("An error has ocurred");
    }
}

/**
 * 
 * @param {number} id 
 */
export const deleteTaskController = async (id) => {
    const confirm = readLineSync.keyInYNStrict("Are you sure you want to delete task with id " + id + "? ");
    if (confirm) {
        const deleted = await deleteTask(id);
        if (deleted === 1) {
            console.log(`Task with id ${id} successfully deleted!`);
            await showTaskController();
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
export const completeTaskController = async (id) => {
    const completed = await completeTask(id);
    if (completed === 1) {
        console.log(`Task with id ${id} was marked as completed!`);
        await showTaskController();
    } else {
        console.log("An error has ocurred");
    }
}

/**
 *
 * @param {number} id
 */
export const showTaskController = async (id) => {
    const data = await showTasks(id);
    console.log(data);
    return data;
}