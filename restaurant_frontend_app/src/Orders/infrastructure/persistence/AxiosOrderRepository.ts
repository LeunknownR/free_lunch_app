import HttpRequest from "../../../shared/domain/HttpRequest";
import { BackendAPIResult } from "../../../shared/infrastructure/services/AxiosProvider";
import OrderRepository from "../../domain/OrderRepository";

export default class AxiosOrderRepository implements OrderRepository {
	constructor(private readonly httpRequest: HttpRequest) {}
	//#region Methods
	async createOrder(): Promise<boolean> {
		const { payload } = await this.httpRequest.post<BackendAPIResult<null>, null>("/kitchen/orders");
		return payload.message === "SUCCESS";
	}
	//#endregion
}
