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
const Ingredient_1 = __importDefault(require("../../domain/Ingredient"));
const IngredientId_1 = __importDefault(require("../../domain/IngredientId"));
const IngredientLabel_1 = __importDefault(require("../../domain/IngredientLabel"));
const IngredientStock_1 = __importDefault(require("../../domain/IngredientStock"));
const IngredientImage_1 = __importDefault(require("../../domain/IngredientImage"));
class MySqlInventoryRepository {
    constructor(inventoryDatabase) {
        this.inventoryDatabase = inventoryDatabase;
    }
    //#region Methods
    toIngredient(record) {
        return new Ingredient_1.default(new IngredientId_1.default(record["id"]), new IngredientLabel_1.default(record["label"]), new IngredientImage_1.default(record["image"]), new IngredientStock_1.default(record["stock"]));
    }
    getAllIngredients() {
        return __awaiter(this, void 0, void 0, function* () {
            const [resultset] = yield this.inventoryDatabase.query("SELECT * FROM ingredient;");
            return resultset.map(this.toIngredient.bind(this));
        });
    }
    findIngredients(ingredientsIds) {
        return __awaiter(this, void 0, void 0, function* () {
            const ingredientsToSearch = ingredientsIds.map(ingredientsId => ingredientsId.value);
            const [resultset] = yield this.inventoryDatabase.query("SELECT * FROM ingredient WHERE id IN (?);", [ingredientsToSearch]);
            return resultset.map(this.toIngredient.bind(this));
        });
    }
    updateIngredientStocks(newInventoryIngredients) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(newInventoryIngredients.map(({ id, stock }) => {
                return this.inventoryDatabase.query("UPDATE ingredient SET stock = ? WHERE id = ?;", [stock.value, id]);
            }));
        });
    }
}
exports.default = MySqlInventoryRepository;
//# sourceMappingURL=MySqlInventoryRepository.js.map