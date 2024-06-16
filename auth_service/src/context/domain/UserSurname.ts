import UserError from "./UserError";


export default class UserSurname {
    readonly value: string;
    constructor(value: string) {
        if (!value)
            throw new UserError("Invalid surname");
        this.value = value;
    }
}