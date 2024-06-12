db = db.getSiblingDB("OrderDatabase");

db.createUser(
	{
		user: "kitchen_service",
		pwd: "kitchen_service_fld",
		roles: [
			{ role: "readWrite", db: "OrderDatabase" }
		]
	}
);
