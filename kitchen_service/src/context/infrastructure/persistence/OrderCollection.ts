export type OrderRecordStatus = "IN_PROGRESS" | "DISPATCHED";
export type OrderDocument = {
	_id: string;
	recipe: number;
	issuedOn: Date;
	status: OrderRecordStatus;
};