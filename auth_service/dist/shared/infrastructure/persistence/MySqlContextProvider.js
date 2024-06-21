"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MySqlContext_1 = __importDefault(require("./MySqlContext"));
const { MYSQL_USER_DATABASE } = process.env;
class MySqlContextProvider {
    static getUserDatabase() {
        if (!MySqlContextProvider.inventoryDatabase)
            MySqlContextProvider.inventoryDatabase = new MySqlContext_1.default(MYSQL_USER_DATABASE);
        return MySqlContextProvider.inventoryDatabase;
    }
}
exports.default = MySqlContextProvider;
//# sourceMappingURL=MySqlContextProvider.js.map