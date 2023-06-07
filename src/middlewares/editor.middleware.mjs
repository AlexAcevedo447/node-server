import e from "express";
import { TaskModel } from "../task_model.mjs";
/**
 * 
 * @param {e.Request} request 
 * @param {e.Response} response 
 * @param {e.NextFunction} next 
 */

export const listEditMiddleware = (request, response, next) => {
    const { body, method, params } = request;

    const badRequestResponse = { status: 400, message: "Wrong task format" };

    const postCondition = !body || !body instanceof TaskModel || Object.keys(body).length !== 3 || Object.values(body).length !== 3 || !Object.values(body).every((value) => value !== null && value !== undefined && typeof value !== "boolean");

    const putCondition = !body || !Object.keys(body).length > 0 || !Object.values(body).length > 0 || !Object.values(body).every((value) => value !== null && value !== undefined && typeof value !== "boolean");

    switch (method) {
        case "POST":
            if (postCondition) response.status(400).json(badRequestResponse);
            else next();
            break;
        case "PUT":
            if (putCondition) response.status(400).json(badRequestResponse);
            else next();
            break;
        default:
            next()
            break;
    }
}