"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderDTO {
    //#endregion
    constructor(order) {
        this.id = order.id;
        this.recipe = {
            name: order.recipe.name,
            image: order.recipe.image
        };
        this.issuedOn = order.issuedOn.toISOString();
        this.status = order.status;
    }
}
exports.default = OrderDTO;
//# sourceMappingURL=OrderDTO.js.map