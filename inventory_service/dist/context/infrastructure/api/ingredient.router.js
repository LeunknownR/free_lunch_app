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
const express_1 = require("express");
const GetAllIngredientsUseCase_1 = __importDefault(require("../../application/GetAllIngredientsUseCase"));
const MySqlContextProvider_1 = __importDefault(require("../../../shared/infrastructure/persistence/MySqlContextProvider"));
const MySqlInventoryRepository_1 = __importDefault(require("../persistence/MySqlInventoryRepository"));
const IngredientDTO_1 = __importDefault(require("./IngredientDTO"));
const withErrorHandler_1 = __importDefault(require("../../../shared/infrastructure/api/withErrorHandler"));
const router = (0, express_1.Router)();
router.get("/", (0, withErrorHandler_1.default)((_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getAllIngredientsUseCase = new GetAllIngredientsUseCase_1.default(new MySqlInventoryRepository_1.default(MySqlContextProvider_1.default.getInventoryDatabase()));
    const allIngredients = yield getAllIngredientsUseCase.invoke();
    res.json({
        data: {
            ingredients: allIngredients.map(ingredient => new IngredientDTO_1.default(ingredient)),
        },
        message: "SUCCESS",
    });
})));
const serviceRouter = {
    path: "/ingredients",
    router,
};
exports.default = serviceRouter;
//# sourceMappingURL=ingredient.router.js.map