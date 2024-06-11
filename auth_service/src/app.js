import express from "express";
import getQueueManager from "./queue.js";

const queueManager = await getQueueManager();
const app = express();

app.use(express.json());

function checkMessageError({ from, to, content }) {
	if (!from) 
		return "From what user required";
	if (!to) 
		return "To what user required";
	if (!content) 
		return "Content required";
	return null;
}

app.post("/messages", (req, res) => {
	const { from, to, content } = req.body;
	const error = checkMessageError({ from, to, content });
	if (error) {
		res.status(400).json({
			message: error
		});
		return;
	}
	queueManager.sendChatMessage({ from, to, content });
	res.status(201).json({
		message: "Message sent!"
	});
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Listen on port ${PORT}`);
});