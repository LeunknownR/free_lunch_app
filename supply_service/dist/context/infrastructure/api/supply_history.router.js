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
const MySqlContextProvider_1 = __importDefault(require("../../shared/infrastructure/persistence/MySqlContextProvider"));
const GetSupplyHistoryUseCase_1 = __importDefault(require("../../application/GetSupplyHistoryUseCase"));
const MySqlSupplyRepository_1 = __importDefault(require("../persistence/MySqlSupplyRepository"));
const SupplyHistoryRecordDTO_1 = __importDefault(require("./SupplyHistoryRecordDTO"));
const IngredientId_1 = __importDefault(require("../../domain/IngredientId"));
const withErrorHandler_1 = __importDefault(require("../../../shared/infrastructure/api/withErrorHandler"));
const router = (0, express_1.Router)();
router.get("/:ingredientId", (0, withErrorHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getAllIngredientsUseCase = new GetSupplyHistoryUseCase_1.default(new MySqlSupplyRepository_1.default(MySqlContextProvider_1.default.getSupplyDatabase()));
    const supplyHistory = yield getAllIngredientsUseCase.invoke(new IngredientId_1.default(req.params.ingredientId));
    res.json({
        data: {
            supplyHistory: supplyHistory.map(record => new SupplyHistoryRecordDTO_1.default(record)),
        },
        message: "SUCCESS",
    });
})));
const serviceRouter = {
    path: "/history",
    router,
};
exports.default = serviceRouter;
//# sourceMappingURL=supply_history.router.js.map