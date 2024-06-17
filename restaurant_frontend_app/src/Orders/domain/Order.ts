export enum OrderStatus {
	InProgress = "IN_PROGRESS",
	Dispatched = "DISPATCHED"
}
export type RecipeOrder = {
	name: string;
	image: string;
};
type Order = {
	id: string;
	recipe: RecipeOrder;
	issuedOn: string;
	status: OrderStatus;
}

export default Order;