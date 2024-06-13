import Order from "./Order";
import OrderId from "./OrderId";
import OrderSaved from "./OrderSaved";

export default interface OrderRepository {
	getAllOrders(): Promise<OrderSaved[]>;
	createOrder(order: Order): Promise<void>;
	findOrder(orderId: OrderId): Promise<Order>;
	updateOrderStatus(order: Order): Promise<void>;
}