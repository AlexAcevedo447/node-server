import express from "express";

import { TaskModel, addTask, completeTask, deleteTask, modifyTask, showTasks, tasklist } from "../task_model.mjs";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const addTaskController = (request, response) => {
    const { description, state } = request.body;
    const task = new TaskModel(tasklist.length, description, state)
    const added = addTask(task)
    const resp = { message: "successfully created", data: showTasks((task) => task) }
    if (added) {
        response.status(201).json(resp);
    } else {
        console.log("An error has ocurred");
        response.status(400).json({ message: "something went wrong" });
    }
}

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const modifyTaskController = (request, response) => {
    const id = request.params.id;
    const { description, state } = request.body;
    const task = new TaskModel(id, description, state);
    const modified = modifyTask(task);
    const resp = { message: "Task successfully modified!", data: showTasks((task) => task) }
    if (modified) {
        response.status(201).json(resp);
    } else {
        response.status(400).json({ message: "something went wrong" });
    }
}

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const deleteTaskController = (request, response) => {
    const id = request.params.id;
    const deleted = deleteTask(id);
    const resp = { message: `Task with id ${id} successfully deleted!`, data: showTasks((task) => task) }
    if (deleted) {
        response.status(201).json(resp);
    } else {
        response.status(400).json({ message: "something went wrong" })
    }
}

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const completeTaskController = (request, response) => {
    const id = request.params.id;
    const completed = completeTask(id);
    const resp = { message: `Task with id ${id} was marked as completed!`, data: showTasks((task) => task) };
    if (completed) {
        response.status(201).json(resp);
    } else {
        response.status(400).json({ message: "something went wrong" })
    }
}

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const filterTasksController = (request, response) => {
    let { filter, value } = request.params;
    let resp = [];
    try {

        switch (filter) {
            case "id":
                resp = showTasks((task) => task.id == value);
                break;
            case "completed":
                const comp = value.toLowerCase() === "true";
                resp = showTasks((task) => task.state.complete === comp);
                break;
            default:
                resp = showTasks((task) => task);
                break;
        }

        response.status(200).json({ message: "Successfully retrieved", data: resp });
    } catch (error) {
        console.log(error);
        response.status(400).json({ message: "Bad request", reason: "unknown" })
    }

}