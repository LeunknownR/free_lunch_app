db = db.getSiblingDB("admin");

// Usuario para la conexión con el "inventory-service"
db.createUser(
	{
		user: "inventory_service",
		pwd: "inventory_service_fld",
		roles: [
			{ role: "read", db: "RecipeDatabase" }
		]
	}
);
// Usuario para la conexión con el "order-service"
db.createUser(
	{
		user: "order_service",
		pwd: "order_service_fld",
		roles: [
			{ role: "readWrite", db: "OrderDatabase" }
		]
	}
);
