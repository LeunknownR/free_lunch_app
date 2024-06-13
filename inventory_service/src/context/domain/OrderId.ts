import OrderError from "./OrderError";
import { randomUUID } from "crypto";

export default class OrderId {
	//#region Attributes
	readonly value: string;
	//#endregion
	constructor(value: string) {
		if (!value) 
			throw new OrderError("Invalid order id");
		this.value = value;
	}
	static Create() {
		return new OrderId(randomUUID());
	}
}