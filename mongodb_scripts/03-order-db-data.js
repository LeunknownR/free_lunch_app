db = db.getSiblingDB("OrderDatabase");

db.createCollection("orderHistory");

// Preloaded data
db.orderHistory.insertMany([
	{
		recipeId: 4,
		issuedAt: new Date(2024, 5, 8, 12, 40),
		//  "WAITING" | "IN_PROGRESS" | "FINALIZED"
		state: "FINALIZED"
	},
    {
		recipeId: 5,
		issuedAt: new Date(2024, 5, 8, 17, 15),
		state: "FINALIZED"
	}
]);