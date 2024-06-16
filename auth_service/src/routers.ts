import { Router } from "express";
import ServiceRouter from "./shared/infrastructure/api/ServiceRouter";
import loginRouter from "./context/infrastructure/api/login.router";

const router = Router();

const serviceRouters: ServiceRouter[] = [loginRouter];

serviceRouters.forEach(serviceRouter => {
	router.use(serviceRouter.path, serviceRouter.router);
});

export default router;
