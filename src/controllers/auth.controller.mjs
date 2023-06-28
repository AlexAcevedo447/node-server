import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { users } from "../database.mjs";
import { verify } from "../security/index.mjs"

dotenv.config();

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const loginController = (request, response) => {
    let { email, password } = request.body;
    const found = users.filter((user) => user.email === email && verify(password, user.password))[0]

    if (found) {
        const token = jwt.sign({ ...found }, process.env.SECRET_KEY);
        response.status(200).json({ message: `Welcome, ${found.username}!!`, token })
    } else {
        response.status(401).json({ message: "Invalid user name or password", status: 401 });
    }
}