db = db.getSiblingDB("RecipeDatabase");

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