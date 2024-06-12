import { Router } from "express";
import ServiceRouter from "./shared/infrastructure/api/ServiceRouter";
import ingredientRouter from "./context/infrastructure/api/ingredient.router";

const router = Router();

const serviceRouters: ServiceRouter[] = [
	ingredientRouter
];

serviceRouters.forEach(serviceRouter => {
	router.use(serviceRouter.path, serviceRouter.router);
});

export default router;
