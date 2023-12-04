import { NextFunction, Request, RequestHandler, Response } from "express";
import { Message } from "../models/message.model";

const messages: Message[] = [];

export const addMessage: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    const message: Message = {
        username: req.body.username,
        content: req.body.content,
        date: new Date(),
    }
    messages.push(message);
    res.json(message);
}

export const getMessages: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    res.json(messages);
}