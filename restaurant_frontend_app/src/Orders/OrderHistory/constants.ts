import { OrderStatus } from "../domain/Order";

export const ORDER_TABLE_HEADERS: string[] = [
	"Plato",
	"Emitido",
	"Estado"
];
type RenderData = {
	status: string;
	className: string;
};
export const ORDER_RECORD_RENDER_DATA_BY_STATUS: Record<OrderStatus, RenderData> = {
	[OrderStatus.InProgress]: {
		status: "Preparando",
		className: "in-progress"
	},
	[OrderStatus.Dispatched]: {
		status: "Despachado",
		className: "dispatched"
	}
};