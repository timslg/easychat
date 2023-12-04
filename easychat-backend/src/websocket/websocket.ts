import { Server } from 'socket.io';

const WEBSOCKET_CORS = {
    origin: "*"
 }

class Websocket extends Server {

    private static io: Websocket;
 
    constructor(httpServer: any) {
        super(httpServer, {
            cors: WEBSOCKET_CORS
        });
    }
 
    public static getInstance(httpServer?: any): Websocket {
 
        if (!Websocket.io) {
            Websocket.io = new Websocket(httpServer);
        }
 
        return Websocket.io;
 
    }
 }
 
 export default Websocket;