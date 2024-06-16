import UserError from "./UserError";


export default class UserPassword {
    readonly value: string;
    constructor(value: string) {
        if (!value)
            throw new UserError("Invalid email");
        this.value = value;
    }
}