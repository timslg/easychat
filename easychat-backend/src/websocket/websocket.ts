import { Server, ServerOptions } from 'socket.io';
import { Server as HttpServer } from 'http';

const WEBSOCKET_CORS = {
    origin: "*"
 }

class Websocket extends Server {

    private static io: Websocket;
 
    constructor(httpServer: HttpServer) {
        super(httpServer, {
            cors: WEBSOCKET_CORS
        });
    }
 
    public static getInstance(httpServer?: HttpServer): Websocket {
 
        if (!Websocket.io) {
            if(httpServer) {
                Websocket.io = new Websocket(httpServer);
            } else {
                throw new Error('Websocket needs to be initialized with an HttpServer first.');
            }
        }
 
        return Websocket.io;
    }
 }
 
 export default Websocket;