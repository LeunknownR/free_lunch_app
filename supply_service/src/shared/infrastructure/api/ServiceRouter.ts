import { Router } from "express";

type ServiceRouter = {
	path: string;
	router: Router;
};

export default ServiceRouter;