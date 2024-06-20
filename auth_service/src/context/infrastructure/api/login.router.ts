import { Request, Router } from "express";
import MySqlContextProvider from "../../../shared/infrastructure/persistence/MySqlContextProvider";
import ServiceRouter from "../../../shared/infrastructure/api/ServiceRouter";
import MySqlUserRepository from "../persistence/MySqlUserRepository";
import LoginUseCase from "../../application/LoginUseCase";
import UserLoginRequest from "./UserLoginRequest";
import BcryptEncrypter from "../../../shared/infrastructure/BcryptEncrypter";
import JWTTokenizer from "../../../shared/infrastructure/JWTTokenizer";
import LoginError from "../../domain/LoginError";
import ResponseLoginDTO, { UserDTO } from "./ResponseLoginDTO";
import UserUsername from "../../domain/UserUsername";
import UserPassword from "../../domain/UserPassword";
import withErrorHandler from "../../../shared/infrastructure/api/withErrorHandler";

const router = Router();

router.post("/", withErrorHandler(async (req: UserLoginRequest, res) => {
	try {
		const loginUseCase = new LoginUseCase(
			new MySqlUserRepository(MySqlContextProvider.getUserDatabase()),
			new BcryptEncrypter(),
			new JWTTokenizer()
		);
		const [user, token] = await loginUseCase.invoke(
			new UserUsername(req.body.username),
			new UserPassword(req.body.password)
		);
		res.json({
			message: "SUCCESS",
			data: new ResponseLoginDTO(
				token,
				new UserDTO(user)
			),
		});
	} catch (error) {
		if (error instanceof LoginError) {
			res.status(400).json({
				message: error.message,
				data: null,
			});
			return;
		}
		res.status(500).json({
			message: process.env.NODE_ENV === "development" ? error : "UNEXPECTED_ERROR",
			data: null,
		});
	}
}));

const serviceRouter: ServiceRouter = {
	path: "/login",
	router,
};

export default serviceRouter;
