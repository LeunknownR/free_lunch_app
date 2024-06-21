"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SupplyHistoryError_1 = __importDefault(require("./SupplyHistoryError"));
const crypto_1 = require("crypto");
class SupplyHistoryRecordId {
    //#endregion
    constructor(value) {
        if (!value)
            throw new SupplyHistoryError_1.default("Invalid supply history record id");
        this.value = value;
    }
    static Create() {
        return new SupplyHistoryRecordId((0, crypto_1.randomUUID)());
    }
}
exports.default = SupplyHistoryRecordId;
//# sourceMappingURL=SupplyHistoryRecordId.js.map