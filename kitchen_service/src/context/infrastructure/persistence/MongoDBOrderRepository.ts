import MongoDBOrderContext from "../../../shared/infrastructure/persistence/MongoDBOrderContext";
import Order from "../../domain/orders/Order";
import OrderId from "../../domain/orders/OrderId";
import OrderIssuedOn from "../../domain/orders/OrderIssuedOn";
import OrderRepository from "../../domain/orders/OrderRepository";
import OrderSaved from "../../domain/orders/OrderSaved";
import OrderStatus from "../../domain/orders/OrderStatus";
import RecipeOrderSaved from "../../domain/orders/RecipeOrderSaved";
import RecipeId from "../../domain/recipes/RecipeId";
import RecipeImage from "../../domain/recipes/RecipeImage";
import RecipeName from "../../domain/recipes/RecipeName";
import { OrderDocument } from "./OrderCollection";
import { RecipeDocument } from "./RecipeCollection";

type OrderSavedDocument = Omit<OrderDocument, "recipeId"> & {
	recipe: Omit<RecipeDocument, "ingredients">;
};

export default class MongoDBOrderRepository implements OrderRepository {
	constructor(private readonly orderDatabase: MongoDBOrderContext) {}
	//#region Methods
	async getAllOrders(): Promise<OrderSaved[]> {
		const orders = await this.orderDatabase.Order.find({})
			.sort({ issuedOn: "desc" })
			.populate<OrderSavedDocument>({
				path: "recipe",
				select: "_id name image",
			})
			.exec();
		return orders.map(
			orderDocument => this.toOrderSaved(orderDocument)
		);
	}
	async createOrder(order: Order): Promise<void> {
		const newOrder = new this.orderDatabase.Order({
			_id: order.id,
			recipe: order.recipeId,
			issuedOn: order.issuedOn.toISOString(),
			status: order.status,
		});
		await newOrder.save();
	}
	private toOrderSaved(orderDocument: OrderSavedDocument): OrderSaved {
		return new OrderSaved(
			new OrderId(orderDocument._id),
			new RecipeOrderSaved(
				new RecipeId(orderDocument.recipe._id),
				new RecipeName(orderDocument.recipe.name),
				new RecipeImage(orderDocument.recipe.image)
			),
			new OrderIssuedOn(orderDocument.issuedOn),
			new OrderStatus(orderDocument.status)
		)
	}
	async findOrder(orderId: OrderId): Promise<OrderSaved> {
		const orderDocument = await this.orderDatabase.Order.findById(orderId.value)
			.populate<OrderSavedDocument>({
				path: "recipe",
				select: "_id name image",
			})
			.exec();
		return this.toOrderSaved(orderDocument);
	}
	async updateOrderStatus(order: OrderSaved): Promise<void> {
		await this.orderDatabase.Order.updateOne(
			{ _id: order.id },
			{ status: order.status }
		);
	}
	//#endregion
}
