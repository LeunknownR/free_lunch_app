import { Socket } from "socket.io";

type WebsocketSubscriber = (socket: Socket) => void;

export default WebsocketSubscriber;