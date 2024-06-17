export type HttpResponse<P> = {
	status: number;
	payload: P;
};
export default interface HttpRequest {
	get<RP>(path: string, queryParams?: Record<string, string | number | boolean>): Promise<HttpResponse<RP>>;
	post<RP, B>(path: string, body?: B): Promise<HttpResponse<RP>>;
}