import { NextFunction, Request, RequestHandler, Response } from "express";

const users: {[username: string] : number} = {};

export const getCounter: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    res.json(users);
}

export const increaseCounter = (username: string) => {
    if(users[username]) {
        users[username] += 1;
    } else {
        users[username] = 1;
    }
}