import OrderError from "./OrderError";

export default class OrderStatus {
	readonly value: string;
	constructor(value: string) {
		if (!value) 
			throw new OrderError("Invalid order state");
		this.value = value;
	}
}