import express from "express";
import proxy from "./proxy.js";

const app = express();

const {
	AUTH_SERVICE_URL, KITCHEN_SERVICE_URL
} = process.env;

app.use("/auth", proxy(AUTH_SERVICE_URL));
app.use("/kitchen", proxy(KITCHEN_SERVICE_URL));