import { Router } from "express";
import ServiceRouter from "./shared/infrastructure/api/ServiceRouter";
import orderRouter from "./context/infrastructure/api/order.router";

const router = Router();

const serviceRouters: ServiceRouter[] = [
	orderRouter
];

serviceRouters.forEach(serviceRouter => {
	router.use(serviceRouter.path, serviceRouter.router);
});

export default router;
