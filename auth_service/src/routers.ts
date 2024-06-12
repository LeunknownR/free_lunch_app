import { Router } from "express";
import ServiceRouter from "./shared/infrastructure/api/ServiceRouter";

const router = Router();

const serviceRouters: ServiceRouter[] = [
];

serviceRouters.forEach(serviceRouter => {
	router.use(serviceRouter.path, serviceRouter.router);
});

export default router;
