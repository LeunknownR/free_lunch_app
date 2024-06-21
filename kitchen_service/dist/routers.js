"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_router_1 = __importDefault(require("./context/infrastructure/api/order.router"));
const recipe_router_1 = __importDefault(require("./context/infrastructure/api/recipe.router"));
const router = (0, express_1.Router)();
const serviceRouters = [order_router_1.default, recipe_router_1.default];
serviceRouters.forEach(serviceRouter => {
    router.use(serviceRouter.path, serviceRouter.router);
});
exports.default = router;
//# sourceMappingURL=routers.js.map