import WebsocketEvent from "../../../shared/domain/WebsocketEvent";
import MongoDBContextProvider from "../../../shared/infrastructure/persistence/MongoDBContextProvider";
import SocketIoServer from "../../../shared/infrastructure/websockets/SocketIoServer";
import GetAllOrdersUseCase from "../../application/GetAllOrdersUseCase";
import OrderDTO from "../api/OrderDTO";
import MongoDBOrderRepository from "../persistence/MongoDBOrderRepository";

export default function onConnectionWebsocket() {
	const socketIoServer = SocketIoServer.getInstance();
	socketIoServer.addConnectionSubscriber(async socket => {
		const orderDatabase = await MongoDBContextProvider.getOrderDatabase();
		const getAllOrdersUseCase = new GetAllOrdersUseCase(
			new MongoDBOrderRepository(orderDatabase)
		);
		const allOrders = await getAllOrdersUseCase.invoke();
		socket.emit(
			WebsocketEvent.SendOrders, 
			allOrders.map(order => new OrderDTO(order))
		);
	});
}