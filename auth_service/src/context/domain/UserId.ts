import UserError from "./UserError";


export default class UserId {
    readonly value: number;
    constructor(value: number) {
        if (!this.isPositiveNumberOrZero(value))
            throw new UserError("Invalid id number");
        if (!value)
            throw new UserError("Invalid id");
        this.value = value;
    }
    private isPositiveNumberOrZero(value: number): boolean {
        return value >= 0;
    }
}