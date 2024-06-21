"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, username, password, name, surname) {
        this._id = id;
        this._username = username;
        this._password = password;
        this._name = name;
        this._surname = surname;
    }
    get id() {
        return this._id.value;
    }
    get username() {
        return this._username.value;
    }
    get name() {
        return this._name.value;
    }
    get password() {
        return this._password.value;
    }
    get surname() {
        return this._surname.value;
    }
    get UserName() {
        return this._name;
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map