import express from "express";
import proxy from "./proxy.js";

const app = express();

const {
	AUTH_SERVICE_URL, 
	KITCHEN_SERVICE_URL, 
	INVENTORY_SERVICE_URL,
	PORT
} = process.env;

proxy({
	app, 
	target: AUTH_SERVICE_URL, 
	path: "/auth"
});
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

app.listen(PORT, () => {
	console.log(`Listen on port ${PORT}`);
});