import express from "express";
import getRouter from "./routes/list-view.router.mjs";
import editRouter from "./routes/list-edit.router.mjs";
const app = express();
const port = 3200;

//Middlewares
app.use(express.json());

app.use("/tasks", [getRouter, editRouter]);

app.use((request, response) => {
    response.status(404).json({ message: "Resource not found", status: 404 })
})

export const server = app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})