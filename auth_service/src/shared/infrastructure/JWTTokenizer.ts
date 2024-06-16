import jwt from "jsonwebtoken";
import Tokenizer, { TokenPayload } from "../domain/Tokenizer";

const { JWT_SECRET_KEY } = process.env;
export default class JWTTokenizer implements Tokenizer {
	async create(payload: TokenPayload): Promise<string> {
		return new Promise((res, rej) => {
			jwt.sign(payload, JWT_SECRET_KEY, (err, token) => {
				if (err) rej(err);
				else res(token);
			});
		});
	}
	async check(token: string): Promise<boolean> {
		return new Promise((res, rej) => {
			jwt.verify(token, JWT_SECRET_KEY, err => {
				if (err) rej(false);
				else res(true);
			});
		});
	}
}
