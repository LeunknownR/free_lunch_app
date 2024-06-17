import OrderSaved from "../../domain/orders/OrderSaved";

export default class OrderDTO {
	//#region Attributes
	id: string;
	recipe: {
		name: string;
		image: string;
	};
	issuedOn: string;
	status: string;
	//#endregion
	constructor(order: OrderSaved) {
		this.id = order.id;
		this.recipe = {
			name: order.recipe.name,
			image: order.recipe.image
		};
		this.issuedOn = order.issuedOn.toISOString();
		this.status = order.status;
	}
}