"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function withErrorHandler(requestHandler) {
    return (req, res, next) => {
        try {
            requestHandler(req, res, next);
        }
        catch (error) {
            res.status(500).json({
                message: process.env.NODE_ENV === "production" ? "UNEXPECTED_ERROR" : error,
                data: null
            });
        }
    };
}
exports.default = withErrorHandler;
//# sourceMappingURL=withErrorHandler.js.map