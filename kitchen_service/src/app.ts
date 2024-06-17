import express, { Application } from "express";
import routers from "./routers";
import { createServer } from "http";
import onMessageQueues from "./message_queues";
import onWebsockets from "./websockets";
import SocketIoServer from "./shared/infrastructure/websockets/SocketIoServer";

const app: Application = express();

const server = createServer(app);

app.use(express.json({
	limit: "5mb"
}));

SocketIoServer.connect(server);
onWebsockets();
onMessageQueues();

app.use(routers);

const { PORT } = process.env;
server.listen(PORT, () => {
	console.log(`Listen on port ${PORT}`);
});