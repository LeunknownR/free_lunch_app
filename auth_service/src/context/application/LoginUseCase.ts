import Encrypter from "../../shared/domain/Encrypter";
import Tokenizer from "../../shared/domain/Tokenizer";
import LoginError from "../domain/LoginError";
import User from "../domain/User";
import UserPassword from "../domain/UserPassword";
import UserRepository from "../domain/UserRepository";
import UserUsername from "../domain/UserUsername";

export default class LoginUseCase {
    constructor(private readonly userRepository: UserRepository,
        private readonly encrypter: Encrypter,
        private readonly tokenizer: Tokenizer
    ) { }
    //#region Methods
    async invoke(username: UserUsername, password: UserPassword): Promise<[User, string]> {
        const user: User = await this.userRepository.getUserByUsername(username);
        if (!user)
            throw LoginError.InvalidCredentials();
        const isValid = await this.encrypter.compare(password.value, user.password);
        if (!isValid)
            throw LoginError.InvalidCredentials();
        const token: string = await this.tokenizer.create(
            {
                id: user.id,
                username: user.username,
            }
        );
        return [user, token];
    }
    //#endregion
}