export type OrderRecordStatus = "WAITING" | "IN_PROGRESS" | "FINALIZED";
export type OrderDocument = {
	recipeId: number;
	issuedOn: Date;
	status: OrderRecordStatus;
};