import UserError from "./UserError";

export default class UserUsername {
    readonly value: string;
    constructor(value: string) {
        if (!value)
            throw new UserError("Invalid username");
        this.value = value;
    }
}