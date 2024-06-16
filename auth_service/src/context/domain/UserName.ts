import UserError from "./UserError";


export default class UserName {
    readonly value: string;
    constructor(value: string) {
        if (!value)
            throw new UserError("Invalid name");
        this.value = value;
    }
}