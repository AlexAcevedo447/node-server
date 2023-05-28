import http, { IncomingMessage, ServerResponse } from "http";
import { showTaskController } from "./controllers.mjs";
const port = 3200;
/**
 * 
 * @param {IncomingMessage} request 
 * @param {ServerResponse<IncomingMessage>} response 
 */
const requestListener = async (request, response) => {
    const data = await showTaskController();
    const res = { message: "successfully retrieved", data }
    response.writeHead(200, res.message)
    response.write(JSON.stringify(res));
    response.end();
}

const server = http.createServer(requestListener);

server.listen(port, (request, response) => {
    console.log(`Server listening on port ${port}`);
})