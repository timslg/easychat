import { NextFunction, Request, RequestHandler, Response } from "express";

type UserCounts = { [username: string]: number };

const users: UserCounts = {};

/**
 * Handles getting user counters.
 */
export const getCounter: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    res.json(users);
}

/**
 * Increases the counter for a given username.
 * @param username - The username to increase the counter for.
 */
export const increaseCounter = (username: string) => {
    if(users[username]) {
        users[username] += 1;
    } else {
        users[username] = 1;
    }
}