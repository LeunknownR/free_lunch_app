import express from "express";
import getQueueManager from "./queue.js";
import getDatabaseManager from "./database.js";

const queueManager = await getQueueManager();
const databaseManager = await getDatabaseManager();
const app = express();

app.use(express.json());

queueManager.onMessage(payload => {
	databaseManager.saveMessage(payload);
});

app.get("/messages/:user", async (req, res) => {
	const { user } = req.params;
	const messagesToUser = await databaseManager.getMessages(user);
	res.json({ messages: messagesToUser });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Listen on port ${PORT}`);
});