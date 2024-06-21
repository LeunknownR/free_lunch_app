"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoginError_1 = __importDefault(require("../domain/LoginError"));
class LoginUseCase {
    constructor(userRepository, encrypter, tokenizer) {
        this.userRepository = userRepository;
        this.encrypter = encrypter;
        this.tokenizer = tokenizer;
    }
    //#region Methods
    invoke(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.getUserByUsername(username);
            if (!user)
                throw LoginError_1.default.InvalidCredentials();
            const isValid = yield this.encrypter.compare(password.value, user.password);
            if (!isValid)
                throw LoginError_1.default.InvalidCredentials();
            const token = yield this.tokenizer.create({
                id: user.id,
                username: user.username,
            });
            return [user, token];
        });
    }
}
exports.default = LoginUseCase;
//# sourceMappingURL=LoginUseCase.js.map