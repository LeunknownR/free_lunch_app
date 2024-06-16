import { Router } from "express";
import ServiceRouter from "./shared/infrastructure/api/ServiceRouter";
import orderRouter from "./context/infrastructure/api/order.router";
import recipeRouter from "./context/infrastructure/api/recipe.router";

const router = Router();

const serviceRouters: ServiceRouter[] = [orderRouter, recipeRouter];

serviceRouters.forEach(serviceRouter => {
	router.use(serviceRouter.path, serviceRouter.router);
});

export default router;
