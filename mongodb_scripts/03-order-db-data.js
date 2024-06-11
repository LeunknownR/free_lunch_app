db = db.getSiblingDB("OrderDatabase");

db.createCollection("orderHistory");

// Preloaded data
db.orderHistory.insertMany([
	{
		recipeId: 4,
		issuedOn: new Date(2024, 5, 8, 12, 40),
		//  values = "WAITING" | "IN_PROGRESS" | "FINALIZED"
		state: "FINALIZED"
	},
    {
		recipeId: 5,
		issuedOn: new Date(2024, 5, 8, 17, 15),
		state: "FINALIZED"
	}
]);