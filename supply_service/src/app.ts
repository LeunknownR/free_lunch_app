import express, { Application } from "express";
import routers from "./routers";
import onMessageQueues from "./message_queues";

const app: Application = express();

app.use(express.json({
	limit: "5mb"
}));

onMessageQueues();

app.use(routers);

const { PORT } = process.env;
app.listen(PORT, () => {
	console.log(`Listen on port ${PORT}`);
});