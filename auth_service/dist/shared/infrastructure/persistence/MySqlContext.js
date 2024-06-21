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
const promise_1 = __importDefault(require("mysql2/promise"));
const { MYSQL_HOSTNAME, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_POOL_CONNECTIONS } = process.env;
class MySqlContext {
    //#endregion
    constructor(databaseName) {
        this.pool = promise_1.default.createPool({
            host: MYSQL_HOSTNAME,
            user: MYSQL_USERNAME,
            password: MYSQL_PASSWORD,
            database: databaseName,
            multipleStatements: true,
            supportBigNumbers: true,
            decimalNumbers: true,
            connectionLimit: parseInt(MYSQL_POOL_CONNECTIONS)
        });
    }
    //#region Methods
    query(sql_1) {
        return __awaiter(this, arguments, void 0, function* (sql, params = []) {
            return yield this.pool.query(sql, params);
        });
    }
}
exports.default = MySqlContext;
//# sourceMappingURL=MySqlContext.js.map