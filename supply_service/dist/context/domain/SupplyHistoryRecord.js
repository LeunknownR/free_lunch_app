"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SupplyHistoryRecordId_1 = __importDefault(require("./SupplyHistoryRecordId"));
const IngredientSuppliedOn_1 = __importDefault(require("./IngredientSuppliedOn"));
class SupplyHistoryRecord {
    constructor(_id, _ingredientId, quantity, _suppliedOn) {
        this._id = _id;
        this._ingredientId = _ingredientId;
        this.quantity = quantity;
        this._suppliedOn = _suppliedOn;
    }
    static Create(ingredientId, ingredientQuantity) {
        return new SupplyHistoryRecord(SupplyHistoryRecordId_1.default.Create(), ingredientId, ingredientQuantity, IngredientSuppliedOn_1.default.Issue());
    }
    get id() {
        return this._id.value;
    }
    get ingredientId() {
        return this._ingredientId.value;
    }
    get suppliedOn() {
        return this._suppliedOn.value;
    }
}
exports.default = SupplyHistoryRecord;
//# sourceMappingURL=SupplyHistoryRecord.js.map