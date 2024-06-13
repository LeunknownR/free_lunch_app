export default class OrderError extends Error {
	constructor(message: string) {
		super(message);
	}
}