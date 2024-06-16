import express, { Application } from "express";
import cors from "cors";
import routers from "./routers";

const app: Application = express();

app.use(express.json({
	limit: "5mb"
}));
app.use(cors());

app.use(routers);

const { PORT } = process.env;
app.listen(PORT, () => {
	console.log(`Listen on port ${PORT}`);
});