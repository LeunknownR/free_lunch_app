import { RequestHandler } from "express";

export default function withErrorHandler(requestHandler: RequestHandler): RequestHandler {
	return (req, res, next) => {
		try {
			requestHandler(req, res, next);
		} catch (error) {
			res.status(500).json({
				message: process.env.NODE_ENV === "production" ? "UNEXPECTED_ERROR" : error,
				data: null
			});
		}
	}
} 