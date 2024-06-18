import jwt from "jsonwebtoken";

const { JWT_SECRET_KEY } = process.env;
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 * @returns {void}
 */
export function checkToken(req, res, next) {
    const authorization = req.headers["authorization"];
    if (!authorization || !authorization.startsWith("Bearer ")) 
        return res.status(401).json({ message: "Unauthorized" });
    const token = authorization.split(' ')[1];
	jwt.verify(token, JWT_SECRET_KEY, err => {
        if (err) 
            return res.status(401).json({ message: "Unauthorized" });
        next();
    });
}