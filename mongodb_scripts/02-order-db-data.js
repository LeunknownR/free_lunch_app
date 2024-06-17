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
            { id: "potato", label: "Papa", quantity: 3 },
            { id: "lemon", label: "Limón", quantity: 5 },
            { id: "lettuce", label: "Lechuga", quantity: 1 },
            { id: "chicken", label: "Pollo", quantity: 1 }
        ]
    },
    {
        _id: 2,
        name: "Puré de papas",
        description: "Un acompañamiento clásico compuesto de puré de papas, acompañado de arroz y carne.",
		image: "pure_de_papas.jpg",
        ingredients: [
            { id: "potato", label: "Papa", quantity: 4 },
            { id: "rice", label: "Arroz", quantity: 1 },
            { id: "meat", label: "Carne", quantity: 1 }
        ]
    },
    {
        _id: 3,
        name: "Arroz con pollo",
        description: "Un plato popular que combina arroz cocido con pollo, tomate y cebolla.",
		image: "arroz_con_pollo.jpg",
        ingredients: [
            { id: "rice", label: "Arroz", quantity: 1 },
            { id: "chicken", label: "Pollo", quantity: 1 },
            { id: "tomato", label: "Tomate", quantity: 2 },
            { id: "onion", label: "Cebolla", quantity: 2 }
        ]
    },
    {
        _id: 4,
        name: "Lomo saltado",
        description: "Un plato peruano que mezcla tiras de carne de res salteadas con tomate, cebolla, papas fritas y se sirve con arroz.",
		image: "lomo_saltado.jpg",
        ingredients: [
            { id: "tomato", label: "Tomate", quantity: 1 },
            { id: "onion", label: "Cebolla", quantity: 2 },
            { id: "meat", label: "Carne", quantity: 2 },
            { id: "potato", label: "Papa", quantity: 4 },
            { id: "rice", label: "Arroz", quantity: 1 }
        ]
    },
    {
        _id: 5,
        name: "Papa a la huancaína",
        description: "Papas cocidas cubiertas con una salsa cremosa de queso, conocida como salsa huancaína.",
		image: "papa_a_la_huancaina.jpg",
        ingredients: [
            { id: "potato", label: "Papa", quantity: 5 },
            { id: "cheese", label: "Queso", quantity: 2 }
        ]
    },
    {
        _id: 6,
        name: "Pollo broaster",
        description: "Pollo frito estilo broaster, servido con papas fritas, lechuga, tomate y ketchup.",
		image: "pollo_broaster.jpg",
        ingredients: [
            { id: "chicken", label: "Pollo", quantity: 2 },
            { id: "potato", label: "Papa", quantity: 4 },
            { id: "lettuce", label: "Lechuga", quantity: 2 },
            { id: "tomato", label: "Tomate", quantity: 1 },
            { id: "ketchup", label: "Ketchup", quantity: 1 }
        ]
    }
]);
//#endregion

//#region Order
db.createCollection("orders");
//  issuedOn = "IN_PROGRESS" | "DISPATCHED"
// Dummie data
db.orders.insertMany([
	{
		_id: "21e18f60-022a-4be9-9309-033febe160e5",
		recipe: 4,
		issuedOn: new Date(2024, 5, 8, 12, 40).toISOString(),
		status: "DISPATCHED"
	},
    {
		_id: "cf34813f-d15b-4d6a-85f5-972f3a209e9b",
		recipe: 5,
		issuedOn: new Date(2024, 5, 8, 17, 15).toISOString(),
		status: "DISPATCHED"
	}
]);
//#endregion
