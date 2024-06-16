import AxiosHttpRequest from "./AxiosHttpRequest";
import userTokenStorage from "../storage/userTokenStorage";

export type BackendAPIResult<D> = {
	data: D;
	message: string;
};
export default class AxiosProvider {
	private static instance: AxiosHttpRequest;
	static getBackendAPI(): AxiosHttpRequest {
		if (!AxiosProvider.instance)
			AxiosProvider.instance = new AxiosHttpRequest(
				import.meta.env.VITE_BACKEND_API_URL,
				() => userTokenStorage.get()
			);
		return AxiosProvider.instance;
	}
}
