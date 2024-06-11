import express, { Application } from "express";
import cors from "cors";
import ingredientRouter from "./context/storage/infrastructure/api/ingredient.router";

const app: Application = express();

app.use(express.json({
	limit: "5mb"
}));
app.use(cors());

app.use("/ingredients", ingredientRouter);

const { PORT } = process.env;
app.listen(PORT, () => {
	console.log(`Listen on port ${PORT}`);
});