import { Router } from "express";
import ServiceRouter from "./shared/infrastructure/api/ServiceRouter";
import orderRouter from "./context/orders/infrastructure/api/order.router";
import recipeRouter from "./context/recipes/infrastructure/api/order.router";

const router = Router();

const serviceRouters: ServiceRouter[] = [
	orderRouter
];

serviceRouters.forEach(serviceRouter => {
	router.use(serviceRouter.path, serviceRouter.router);
});

export default router;
