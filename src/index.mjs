import http, { IncomingMessage, ServerResponse } from "http";
import { tasklist } from "./task_model.mjs";
const port = 8080;
/**
 * 
 * @param {IncomingMessage} request 
 * @param {ServerResponse<IncomingMessage>} response 
 */
const requestListener = (request, response) => {
    const res = { message: "successfully retrieved", data: tasklist }
    response.writeHead(200, res.message)
    response.write(JSON.stringify(res));
    response.end();
}

const server = http.createServer(requestListener);

server.listen(port, (request, response) => {
    console.log(`Server listening on port ${port}`);
})