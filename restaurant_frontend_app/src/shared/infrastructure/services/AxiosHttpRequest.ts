import axios, { AxiosError, AxiosInstance } from "axios";
import HttpRequest, { HttpResponse } from "../../domain/HttpRequest";
import GetToken from "./AxiosToken";

export default class AxiosHttpRequest implements HttpRequest {
	private readonly api: AxiosInstance;
	constructor(baseURL: string, getToken: GetToken) {
		this.api = axios.create({
			baseURL,
		});
		this.setInterceptors(getToken);
	}
	private setInterceptors(getToken: GetToken): void {
		this.api.interceptors.request.use(req => {
			req.headers.Authorization = `Bearer ${getToken()}`;
			return req;
		});
	}
	async get<RP>(
		path: string,
		params?: Record<string, string | number | boolean>
	): Promise<HttpResponse<RP>> {
		const response = await this.api.get(path, {
			params,
		});
		return {
			status: response.status,
			payload: response.data,
		};
	}
	async post<RP, B>(path: string, body?: B): Promise<HttpResponse<RP>> {
		let response: HttpResponse<RP>;
		try {
			const result = await this.api.post(path, body);
			response = {
				status: result.status,
				payload: result.data,
			};
		} catch (error) {
			if (error instanceof AxiosError) {
				const { status, data } = error.response!;
				response = {
					status,
					payload: data,
				};
			} else throw error;
		}
		return response;
	}
}
