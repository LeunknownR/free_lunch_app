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
const MongoDBContextProvider_1 = __importDefault(require("../../../shared/infrastructure/persistence/MongoDBContextProvider"));
const GetAllRecipesUseCase_1 = __importDefault(require("../../application/GetAllRecipesUseCase"));
const MongoDBRecipeRepository_1 = __importDefault(require("../persistence/MongoDBRecipeRepository"));
const RecipeDTO_1 = __importDefault(require("./RecipeDTO"));
const withErrorHandler_1 = __importDefault(require("../../../shared/infrastructure/api/withErrorHandler"));
const router = (0, express_1.Router)();
router.get("/", (0, withErrorHandler_1.default)((_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderDatabase = yield MongoDBContextProvider_1.default.getOrderDatabase();
    const getAllRecipesUseCase = new GetAllRecipesUseCase_1.default(new MongoDBRecipeRepository_1.default(orderDatabase));
    const allRecipes = yield getAllRecipesUseCase.invoke();
    res.json({
        data: {
            recipes: allRecipes.map(recipe => new RecipeDTO_1.default(recipe)),
        },
        message: "SUCCESS",
    });
})));
const serviceRouter = {
    path: "/recipes",
    router,
};
exports.default = serviceRouter;
//# sourceMappingURL=recipe.router.js.map