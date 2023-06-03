import express from "express";
import { showTaskController } from "./controllers.mjs";
const app = express();
const port = 3200;

//Middlewares
app.use(express.json());
/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */
const showTasks = async (request, response) => {
    try {
        const data = await showTaskController();
        const res = { message: "successfully retrieved", data }
        response.status(200).json(res);
        response.end();
    } catch (error) {
        console.log(error)
        response.end();
    }
}
app.get("/tasks", showTasks);

app.use((request, response) => {
    response.status(404).json({ message: "Resource not found", status: 404 })
})

export const server = app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})