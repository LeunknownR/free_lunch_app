import { createProxyMiddleware } from "http-proxy-middleware";

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
 * @param {import("express").Application} data.app Express application
 * @param {string} data.path Current path requested
 * @param {string} data.target Address URL where the request will be redirected
 */
export default function proxy({
	app, path, target
}) {
	app.use(path, createProxyMiddleware({ 
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
	}));
}
