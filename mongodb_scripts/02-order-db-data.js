db = db.getSiblingDB("OrderDatabase");

//#region Recipes
db.createCollection("recipes");
db.recipes.insertMany([
    {
        _id: 1,
        name: "Causa peruana",
        description: "Un plato típico peruano hecho a base de puré de papa amarilla, limón, lechuga y pollo desmenuzado.",
		image: "causa_peruana.jpg",
        ingredients: [
            { id: "potato", name: "Papa", quantity: 3 },
            { id: "lemon", name: "Limón", quantity: 5 },
            { id: "lettuce", name: "Lechuga", quantity: 1 },
            { id: "chicken", name: "Pollo", quantity: 1 }
        ]
    },
    {
        _id: 2,
        name: "Puré de papas",
        description: "Un acompañamiento clásico compuesto de puré de papas, acompañado de arroz y carne.",
		image: "pure_de_papas.jpg",
        ingredients: [
            { id: "potato", name: "Papa", quantity: 4 },
            { id: "rice", name: "Arroz", quantity: 1 },
            { id: "meat", name: "Carne", quantity: 1 }
        ]
    },
    {
        _id: 3,
        name: "Arroz con pollo",
        description: "Un plato popular que combina arroz cocido con pollo, tomate y cebolla.",
		image: "arroz_con_pollo.jpg",
        ingredients: [
            { id: "rice", name: "Arroz", quantity: 1 },
            { id: "chicken", name: "Pollo", quantity: 1 },
            { id: "tomato", name: "Tomate", quantity: 2 },
            { id: "onion", name: "Cebolla", quantity: 2 }
        ]
    },
    {
        _id: 4,
        name: "Lomo saltado",
        description: "Un plato peruano que mezcla tiras de carne de res salteadas con tomate, cebolla, papas fritas y se sirve con arroz.",
		image: "lomo_saltado.jpg",
        ingredients: [
            { id: "tomato", name: "Tomate", quantity: 1 },
            { id: "onion", name: "Cebolla", quantity: 2 },
            { id: "meat", name: "Carne", quantity: 2 },
            { id: "potato", name: "Papa", quantity: 4 },
            { id: "rice", name: "Arroz", quantity: 1 }
        ]
    },
    {
        _id: 5,
        name: "Papa a la huancaína",
        description: "Papas cocidas cubiertas con una salsa cremosa de queso, conocida como salsa huancaína.",
		image: "papa_a_la_huancaina.jpg",
        ingredients: [
            { id: "potato", name: "Papa", quantity: 5 },
            { id: "cheese", name: "Queso", quantity: 2 }
        ]
    },
    {
        _id: 6,
        name: "Pollo broaster",
        description: "Pollo frito estilo broaster, servido con papas fritas, lechuga, tomate y ketchup.",
		image: "pollo_broaster.jpg",
        ingredients: [
            { id: "chicken", name: "Pollo", quantity: 2 },
            { id: "potato", name: "Papa", quantity: 4 },
            { id: "lettuce", name: "Lechuga", quantity: 2 },
            { id: "tomato", name: "Tomate", quantity: 1 },
            { id: "ketchup", name: "Ketchup", quantity: 1 }
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
