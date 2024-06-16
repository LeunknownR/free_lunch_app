import { BackendAPIResult } from "../../../shared/infrastructure/services/AxiosProvider";
import HttpRequest from "../../../shared/domain/HttpRequest";
import SupplyRepository from "../../domain/SupplyRepository";
import SupplyHistoryRecord from "../../domain/SupplyHistoryRecord";
import { GetSupplyHistoryData } from "./AxiosSupplyResponsePayloadData";

export default class AxiosSupplyRepository implements SupplyRepository {
	constructor(private readonly httpRequest: HttpRequest) {}
	//#region Methods
	async getSupplyHistory(
		ingredientId: string
	): Promise<SupplyHistoryRecord[]> {
		const { payload } = await this.httpRequest.get<
			BackendAPIResult<GetSupplyHistoryData>
		>(`/supply/history/${ingredientId}`);
		return payload.data.supplyHistory;
	}
	//#endregion
}
