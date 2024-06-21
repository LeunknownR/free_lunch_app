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
const Recipe_1 = __importDefault(require("../../domain/recipes/Recipe"));
const RecipeDescription_1 = __importDefault(require("../../domain/recipes/RecipeDescription"));
const RecipeId_1 = __importDefault(require("../../domain/recipes/RecipeId"));
const RecipeImage_1 = __importDefault(require("../../domain/recipes/RecipeImage"));
const RecipeIngredient_1 = __importDefault(require("../../domain/recipes/RecipeIngredient"));
const RecipeIngredientId_1 = __importDefault(require("../../domain/recipes/RecipeIngredientId"));
const RecipeIngredientLabel_1 = __importDefault(require("../../domain/recipes/RecipeIngredientLabel"));
const RecipeIngredientQuantity_1 = __importDefault(require("../../domain/recipes/RecipeIngredientQuantity"));
const RecipeIngredients_1 = __importDefault(require("../../domain/recipes/RecipeIngredients"));
const RecipeName_1 = __importDefault(require("../../domain/recipes/RecipeName"));
class MongoDBRecipeRepository {
    constructor(orderDatabase) {
        this.orderDatabase = orderDatabase;
    }
    //#region Methods
    getAllRecipes() {
        return __awaiter(this, void 0, void 0, function* () {
            const allRecipes = yield this.orderDatabase.Recipe.find({});
            return allRecipes.map(recipeDocument => this.toRecipe(recipeDocument));
        });
    }
    getOneRecipe() {
        return __awaiter(this, void 0, void 0, function* () {
            const [oneRecipe] = yield this.orderDatabase.Recipe.aggregate().sample(1);
            return this.toRecipe(oneRecipe);
        });
    }
    toRecipe({ _id, name, description, image, ingredients }) {
        return new Recipe_1.default(new RecipeId_1.default(_id), new RecipeName_1.default(name), new RecipeDescription_1.default(description), new RecipeImage_1.default(image), new RecipeIngredients_1.default(ingredients.map(ingredient => new RecipeIngredient_1.default(new RecipeIngredientId_1.default(ingredient.id), new RecipeIngredientLabel_1.default(ingredient.label), new RecipeIngredientQuantity_1.default(ingredient.quantity)))));
    }
}
exports.default = MongoDBRecipeRepository;
//# sourceMappingURL=MongoDBRecipeRepository.js.map