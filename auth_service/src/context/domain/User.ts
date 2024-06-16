import UserId from "./UserId";
import UserName from "./UserName";
import UserPassword from "./UserPassword";
import UserSurname from "./UserSurname";
import UserUsername from "./UserUsername";

export default class User {
    private readonly _id: UserId;
    private readonly _username: UserUsername
    private readonly _password: UserPassword;
    private readonly _name: UserName;
    private readonly _surname: UserSurname;

    constructor(id: UserId, username: UserUsername, password: UserPassword, name: UserName, surname: UserSurname) {
        this._id = id;
        this._username = username;
        this._password = password;
        this._name = name;
        this._surname = surname;
    }

    get id(): number {
        return this._id.value;
    }
    get username(): string {
        return this._username.value;
    }
    get name(): string {
        return this._name.value;
    }
    get password(): string {
        return this._password.value;
    }
    get surname(): string {
        return this._surname.value;
    }
    get UserName(): UserName {
        return this._name;
    }
}