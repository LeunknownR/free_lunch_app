"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RecipeDTO {
    //#endregion
    constructor(recipe) {
        this.id = recipe.id;
        this.name = recipe.name;
        this.description = recipe.description;
        this.image = recipe.image;
        this.ingredients = recipe.ingredients.map(ingredient => ({
            id: ingredient.id,
            label: ingredient.label,
            quantity: ingredient.quantity
        }));
    }
}
exports.default = RecipeDTO;
//# sourceMappingURL=RecipeDTO.js.map