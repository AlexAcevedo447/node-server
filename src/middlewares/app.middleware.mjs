import e from "express"

/**
 * 
 * @param {e.Request} request 
 * @param {e.Response} response 
 */
export const notFoundMiddleware = (request, response) => {
    response.status(404).json({ message: "Resource not found", status: 404 })
};

/**
 * 
 * @param {e.Request} request 
 * @param {e.Response} response 
 * @param {e.NextFunction} next
 */
export const notAllowedMethod = (request, response, next) => {
    const { method } = request;
    const allowedMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"];
    const methodResponse = allowedMethods.some((allowedMethod) => allowedMethod === method);

    if (methodResponse) {
        next()
    } else {
        response.status(405).json({ message: "Currently, there are no resouces using this http method", status: 405 })
    }
}