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
const User_1 = __importDefault(require("../../domain/User"));
const UserId_1 = __importDefault(require("../../domain/UserId"));
const UserName_1 = __importDefault(require("../../domain/UserName"));
const UserPassword_1 = __importDefault(require("../../domain/UserPassword"));
const UserSurname_1 = __importDefault(require("../../domain/UserSurname"));
const UserUsername_1 = __importDefault(require("../../domain/UserUsername"));
class MySqlUserRepository {
    constructor(inventoryDatabase) {
        this.inventoryDatabase = inventoryDatabase;
    }
    //#region Methods
    getUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.inventoryDatabase.query("SELECT * FROM user WHERE username = ?;", [username.value]);
            const record = result[0][0];
            if (!record)
                return null;
            return new User_1.default(new UserId_1.default(record["id"]), new UserUsername_1.default(record["username"]), new UserPassword_1.default(record["password"]), new UserName_1.default(record["name"]), new UserSurname_1.default(record["surname"]));
        });
    }
}
exports.default = MySqlUserRepository;
//# sourceMappingURL=MySqlUserRepository.js.map