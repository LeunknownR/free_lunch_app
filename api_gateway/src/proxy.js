import { createProxyMiddleware } from "http-proxy-middleware";

/**
 * @param {string} target
 */
export default function proxy(target) {
	return createProxyMiddleware({ target, changeOrigin: true });
}
