import express from "express";
import proxy from "./proxy.js";
import http from "http";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

const {
	AUTH_SERVICE_URL,
	KITCHEN_SERVICE_URL,
	INVENTORY_SERVICE_URL,
	SUPPLY_SERVICE_URL,
	PORT
} = process.env;

app.use(cors());

const server = http.createServer(app);

proxy({
	app,
	target: AUTH_SERVICE_URL,
	path: "/auth",
	isAuthenticated: false
});
proxy({
	app,
	target: KITCHEN_SERVICE_URL,
	path: "/kitchen",
	isAuthenticated: true
});
proxy({
	app,
	target: INVENTORY_SERVICE_URL,
	path: "/inventory",
	isAuthenticated: true
});
proxy({
	app,
	target: SUPPLY_SERVICE_URL,
	path: "/supply",
	isAuthenticated: true
});

app.use("/socket.io", createProxyMiddleware({
	target: KITCHEN_SERVICE_URL,
	changeOrigin: true,
	ws: true
}));

server.listen(PORT, () => {
	console.log(`Listen on port ${PORT}`);
});