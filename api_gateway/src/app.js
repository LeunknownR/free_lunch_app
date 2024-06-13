import express from "express";
import proxy from "./proxy.js";

const app = express();

const {
	KITCHEN_SERVICE_URL,
	INVENTORY_SERVICE_URL,
	SUPPLY_SERVICE_URL,
	PORT
} = process.env;

proxy({
	app,
	target: KITCHEN_SERVICE_URL,
	path: "/kitchen"
});
proxy({
	app,
	target: INVENTORY_SERVICE_URL,
	path: "/inventory"
});
proxy({
	app,
	target: SUPPLY_SERVICE_URL,
	path: "/supply"
});

app.listen(PORT, () => {
	console.log(`Listen on port ${PORT}`);
});