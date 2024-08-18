import MySqlContext from "../../../shared/infrastructure/persistence/MySqlContext";
import User from "../../domain/User";
import UserId from "../../domain/UserId";
import UserName from "../../domain/UserName";
import UserPassword from "../../domain/UserPassword";
import UserRepository from "../../domain/UserRepository";
import UserSurname from "../../domain/UserSurname";
import UserUsername from "../../domain/UserUsername";

export default class MySqlUserRepository implements UserRepository {
    constructor(private readonly userDatabase: MySqlContext) { }
    //#region Methods
    async getUserByUsername(username: UserUsername): Promise<User | null> {
        const result = await this.userDatabase.query(
            "SELECT * FROM user WHERE username = ?;",
            [username.value]
        );
        const record = result[0][0];
        if (!record) return null;
        return new User(
            new UserId(record["id"]),
            new UserUsername(record["username"]),
            new UserPassword(record["password"]),
            new UserName(record["name"]),
            new UserSurname(record["surname"])
        );
    }
    //#endregion
}
