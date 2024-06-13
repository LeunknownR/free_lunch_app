db = db.getSiblingDB("OrderDatabase");

//#region Recipes
db.createCollection("recipes");
db.recipes.insertMany([
	{
		_id: 1,
		name: "Causa peruana",
		ingredients: [
			{ id: "potato", quantity: 3 },
			{ id: "lemon", quantity: 5 },
			{ id: "lettuce", quantity: 1 },
			{ id: "chicken", quantity: 1 }
		]
	},
    {
		_id: 2,
		name: "Puré de papas",
		ingredients: [
			{ id: "potato", quantity: 4 },
			{ id: "rice", quantity: 1 },
			{ id: "meat", quantity: 1 }
		]
	},
    {
		_id: 3,
		name: "Arroz con pollo",
		ingredients: [
			{ id: "rice", quantity: 1 },
			{ id: "chicken", quantity: 1 },
			{ id: "tomato", quantity: 2 },
			{ id: "onion", quantity: 2 }
		]
	},
    {
		_id: 4,
		name: "Lomo saltado",
		ingredients: [
			{ id: "tomato", quantity: 1 },
			{ id: "onion", quantity: 2 },
			{ id: "meat", quantity: 2 },
			{ id: "potato", quantity: 4 },
			{ id: "rice", quantity: 1 }
		]
	},
    {
		_id: 5,
		name: "Papa a la huancaína",
		ingredients: [
			{ id: "potato", quantity: 5 },
			{ id: "cheese", quantity: 2 }
		]
	},
    {
		_id: 6,
		name: "Pollo broaster",
		ingredients: [
			{ id: "chicken", quantity: 2 },
			{ id: "potato", quantity: 4 },
			{ id: "lettuce", quantity: 2 },
			{ id: "tomato", quantity: 1 },
			{ id: "ketchup", quantity: 1 }
		]
	}
]);
//#endregion

//#region Order
db.createCollection("orders");
// Dummie data
db.orders.insertMany([
	{
		_id: "21e18f60-022a-4be9-9309-033febe160e5",
		recipe: 4,
		issuedOn: new Date(2024, 5, 8, 12, 40),
		//  values = "IN_PROGRESS" | "DISPATCHED"
		status: "DISPATCHED"
	},
    {
		_id: "cf34813f-d15b-4d6a-85f5-972f3a209e9b",
		recipe: 5,
		issuedOn: new Date(2024, 5, 8, 17, 15),
		status: "DISPATCHED"
	}
]);
//#endregion
