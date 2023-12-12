import { NextFunction, Request, RequestHandler, Response } from "express";
import { Message } from "../models/message.model";
import Websocket from "../websocket/websocket";
import { increaseCounter } from "./users.controller";

const messages: Message[] = [];

/**
 * Handles adding a new message.
 */
export const addMessage: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    const io = Websocket.getInstance();

    const message: Message = {
        username: req.body.username,
        content: req.body.content,
        date: new Date(),
    };

    messages.push(message);
    io.emit('message', message);
    increaseCounter(req.body.username);
    res.json(message);
}

/**
 * Handles getting all messages.
 */
export const getMessages: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    res.json(messages);
}