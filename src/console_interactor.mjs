import readLineSync from "readline-sync";

import { showTaskController } from "./controllers.mjs";
import { TaskModel, tasklist } from "./task_model.mjs";

let options = ["Create a task", "Modify a task", "Show tasks", "Show only one task", "Mark task as completed", "Delete a task"];

console.log("Welcome to NS Task Manager!\nHere is a complete log of the current tasks: \n")
showTaskController();

export let index = readLineSync.keyInSelect(options, "Which action do you want to do?");

export const addTaskInteractor = () => {
    const id = tasklist.length;
    const description = readLineSync.question("Please enter a description for your new task: ");
    const task = new TaskModel(id, description, { complete: false, deletable: false });

    return task;
}

export const modifyTaskInteractor = () => {
    const idToModify = readLineSync.question("Please enter the task id you want to modify: ");
    const descriptionModified = readLineSync.question("Please enter a new description for the existing task: ");
    const completed = readLineSync.keyInYNStrict("Mark as completed? ");
    const deletable = readLineSync.keyInYNStrict("Is your task currently deletable? ");
    const taskModified = new TaskModel(parseInt(idToModify), descriptionModified, { complete: completed, deletable });

    return taskModified;
}

export const taskIdInteractor = (method) => {
    const id = parseInt(readLineSync.question("Please enter the task id you want to " + method + ": "));
    return id;
}
