import Order from "../../domain/orders/Order";

export default class OrderDTO {
	//#region Attributes
	recipeId: number;
	issuedOn: Date;
	status: string;
	//#endregion
	constructor(order: Order) {
		this.recipeId = order.recipeId;
		this.issuedOn = order.issuedOn;
		this.status = order.status.value;
	}
}