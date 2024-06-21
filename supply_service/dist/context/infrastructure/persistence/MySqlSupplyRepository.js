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
const IngredientId_1 = __importDefault(require("../../domain/IngredientId"));
const IngredientQuantity_1 = __importDefault(require("../../domain/IngredientQuantity"));
const IngredientSuppliedOn_1 = __importDefault(require("../../domain/IngredientSuppliedOn"));
const SupplyHistoryRecord_1 = __importDefault(require("../../domain/SupplyHistoryRecord"));
const SupplyHistoryRecordId_1 = __importDefault(require("../../domain/SupplyHistoryRecordId"));
class MySqlSupplyRepository {
    constructor(supplyDatabase) {
        this.supplyDatabase = supplyDatabase;
    }
    //#region Methods
    getSupplyHistory(ingredientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const [resultset] = yield this.supplyDatabase.query("SELECT * FROM supply_history WHERE ingredient_id = ? ORDER BY supplied_on DESC;", [ingredientId.value]);
            return resultset.map(record => new SupplyHistoryRecord_1.default(new SupplyHistoryRecordId_1.default(record["id"]), new IngredientId_1.default(record["ingredient_id"]), new IngredientQuantity_1.default(record["quantity"]), new IngredientSuppliedOn_1.default(record["supplied_on"])));
        });
    }
    recordSupply(supplyHistoryRecord) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, ingredientId, quantity, suppliedOn } = supplyHistoryRecord;
            this.supplyDatabase.query("INSERT INTO supply_history(id, ingredient_id, quantity, supplied_on) VALUES (?, ?, ?, ?);", [id, ingredientId, quantity.value, suppliedOn]);
        });
    }
}
exports.default = MySqlSupplyRepository;
//# sourceMappingURL=MySqlSupplyRepository.js.map