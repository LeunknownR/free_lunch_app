import { Router } from "express";
import ServiceRouter from "./shared/infrastructure/api/ServiceRouter";
import supplyHistoryRouter from "./context/infrastructure/api/supplyHistory.router";

const router = Router();

const serviceRouters: ServiceRouter[] = [
	supplyHistoryRouter
];

serviceRouters.forEach(serviceRouter => {
	router.use(serviceRouter.path, serviceRouter.router);
});

export default router;
