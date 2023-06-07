import e from "express";

/**
 * 
 * @param {e.Request} request 
 * @param {e.Response} response 
 * @param {e.NextFunction} next
 */
export const validParams = (request, response, next) => {
    const { params } = request;
    const validateMethods = Object.keys(params).every((param) => typeof param === "string" || typeof param === "undefined") && Object.values(params).every((param) => typeof param === "string" || typeof param === "undefined");

    if (validateMethods) {
        next()
    } else {
        response.status(400).json({ message: "Wrong params", status: 405 })
    }
}