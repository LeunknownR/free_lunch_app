import { useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";
import WebsocketEvent from "../domain/WebsocketEvent";
import Order from "../domain/Order";

function getBackendWsURL(): string {
	return `ws://${window.location.hostname}:${
		import.meta.env.VITE_BACKEND_PORT
	}`;
}
const useOrders = () => {
	const [orders, setOrders] = useState<Order[]>([]);
	const kitchenSocket = useRef<Socket | null>(null);
	const isListening = useRef<boolean>(false);
	useEffect(() => {
		if (!kitchenSocket.current)
			kitchenSocket.current = io(getBackendWsURL(), {
				transports: ["websocket"],
			});
		return () => {
			kitchenSocket.current?.disconnect();
			kitchenSocket.current = null;
		};
	}, []);
	useEffect(() => {
		if (!kitchenSocket.current || isListening.current) return;
		isListening.current = true;
		kitchenSocket.current.on(
			WebsocketEvent.SendOrders,
			(allOrders: Order[]) => {
				setOrders(allOrders);
			}
		);
		kitchenSocket.current.on(WebsocketEvent.NewOrder, (order: Order) => {
			setOrders(prev => [order, ...prev]);
		});
		kitchenSocket.current.on(WebsocketEvent.UpdateOrder, (order: Order) => {
			setOrders(prev =>
				prev.map(currentOrder =>
					currentOrder.id === order.id ? order : currentOrder
				)
			);
		});
	}, [kitchenSocket.current]);
	return orders;
};

export default useOrders;
