import User from "../../domain/User";

export class UserDTO {
    id: number;
    username: string;
    name: string;
    surname: string;
    constructor(user: User) {
        this.id = user.id;
        this.username = user.username;
        this.name = user.name;
        this.surname = user.surname;
    }
}

export default class ResponseLoginDTO {
    constructor(public token: string, public user: UserDTO) { }
};