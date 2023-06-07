import express from "express";
import getRouter from "./routes/list-view.router.mjs";
import editRouter from "./routes/list-edit.router.mjs";
import { notAllowedMethod, notFoundMiddleware } from "./middlewares/app.middleware.mjs";
const app = express();
const port = 3200;

//Middlewares
app.use(express.json());

app.use("/tasks", [getRouter, editRouter]);

app.use(notAllowedMethod)
app.use(notFoundMiddleware);

export const server = app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})