export type HttpResponse<D> = {
	status: number;
	data: D;
};
export default interface HttpRequest {
	get<D>(url: string, queryParams: Record<string, string | number>): Promise<HttpResponse<D>>;
}