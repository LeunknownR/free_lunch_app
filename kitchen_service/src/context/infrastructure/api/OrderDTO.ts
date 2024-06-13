import OrderSaved from "../../domain/orders/OrderSaved";

export default class OrderDTO {
	//#region Attributes
	id: string;
	recipe: {
		id: number;
		name: string;
	};
	issuedOn: Date;
	status: string;
	//#endregion
	constructor(order: OrderSaved) {
		this.id = order.id;
		this.recipe = {
			id: order.recipe.id,
			name: order.recipe.name
		};
		this.issuedOn = order.issuedOn;
		this.status = order.status;
	}
}