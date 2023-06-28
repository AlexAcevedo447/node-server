import e from "express"
import jwt from "jsonwebtoken";

/**
 * 
 * @param {e.Request} request 
 * @param {e.Response} response 
 * @param {e.NextFunction} next 
 */
export const verifyTokenMiddleware = (request, response, next) => {
    const token = request.headers.authorization;
    jwt.verify(token, process.env["SECRET_KEY"], (error) =>
        error ? response.status(400).json({ message: "Not provided or invalid token", status: 400 }) : next()
    );
};