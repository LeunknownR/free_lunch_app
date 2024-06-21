"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MySqlContext_1 = __importDefault(require("../../../../shared/infrastructure/persistence/MySqlContext"));
const { MYSQL_SUPPLY_DATABASE } = process.env;
class MySqlContextProvider {
    static getSupplyDatabase() {
        if (!MySqlContextProvider.supplyDatabase)
            MySqlContextProvider.supplyDatabase = new MySqlContext_1.default(MYSQL_SUPPLY_DATABASE);
        return MySqlContextProvider.supplyDatabase;
    }
}
exports.default = MySqlContextProvider;
//# sourceMappingURL=MySqlContextProvider.js.map