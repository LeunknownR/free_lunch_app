import { createProxyMiddleware } from "http-proxy-middleware";
import { checkToken } from "./auth.js";

const { API_GATEWAY_URL } = process.env;

function getProxyRetry() {
	return createProxyMiddleware({
		target: API_GATEWAY_URL,
		changeOrigin: true
	});
}
const proxyRetry = getProxyRetry();
/**
 * @param {Object} data
 * @param {import("express").Application} data.app Express application.
 * @param {string} data.path Current path requested.
 * @param {string} data.target Address URL where the request will be redirected.
 * @param {string} data.isAuthenticated It's an authenticated route.
 */
export default function proxy({
	app, path, target, isAuthenticated
}) {
	const proxyMiddleware = createProxyMiddleware({ 
		target, 
		changeOrigin: true, 
		pathRewrite: {
			[`^${path}`]: ""
		},
		on: {
			error: (err, req, res) => {
				console.error(err);
				if (err?.code === "ECONNREFUSED") 
					proxyRetry(req, res);
			}
		}
	});
	if (isAuthenticated) app.use(path, checkToken, proxyMiddleware);
	else app.use(path, proxyMiddleware);
}
