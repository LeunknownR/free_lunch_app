import axios from "axios";
import HttpRequest, { HttpResponse } from "../../domain/HttpRequest";

export default class AxiosHttpRequest implements HttpRequest {
	async get<D>(
		url: string,
		params: Record<string, string | number>
	): Promise<HttpResponse<D>> {
		const response = await axios.get(url, {
			params,
		});
		return {
			status: response.status,
			data: response.data,
		};
	}
}
