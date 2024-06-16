export default class UserError extends Error {
    constructor(message: string) {
        super(message);
    }
}