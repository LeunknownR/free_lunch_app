import UserLogin from "../../domain/UserLogin";
import AuthRepository, { LoginResponse } from "../../domain/AuthRepository";
import { BackendAPIResult } from "../../../shared/infrastructure/services/AxiosProvider";
import HttpRequest from "../../../shared/domain/HttpRequest";
import HttpRequestError from "../../../shared/domain/HttpRequestError";

export default class AxiosAuthRepository implements AuthRepository {
	constructor(private readonly httpRequest: HttpRequest) {}
	//#region Methods
	async login(user: UserLogin): Promise<LoginResponse> {
		const { status, payload } = await this.httpRequest.post<
			UserLogin,
			BackendAPIResult<LoginResponse>
		>("/auth/login", user);
		if (status !== 200) throw new HttpRequestError(payload.message);
		return payload.data;
	}
	//#endregion
}
