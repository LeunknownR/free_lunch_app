import OrderError from "./OrderError";

export default class OrderIssuedOn {
	readonly value: Date;
	constructor(value: Date) {
		if (!this.isPastOrToday(value)) 
			throw new OrderError("Invalid order supplied on");
		this.value = value;
	}
	static Issue(): OrderIssuedOn {
		return new OrderIssuedOn(new Date());
	}
	private isPastOrToday(value: Date): boolean {
		const today = new Date();
		return value <= today;
	}
}