export default interface OrderRepository {
	createOrder(): Promise<boolean>;
}