import HeaderSection from "../components/HeaderSection";
import Table from "../components/Table";
import useTitle from "../hooks/useTitle";
import DashboardLayout from "../layout/DashboardLayout";
import TableOrderRow from "./OrderHistory/TableOrderRow";
import { ORDER_TABLE_HEADERS } from "./OrderHistory/constants";
import PlaceOrderView from "./PlaceOrder/PlaceOrderView";
import useAppContext from "../context/useAppContext";
import GuideMessage from "../components/GuideMessage";

const OrderView = () => {
	useTitle("Pedidos");
	const { orders } = useAppContext();
	return (
		<DashboardLayout>
			<PlaceOrderView />
			<HeaderSection
				title="Historial de pedidos"
				description="Revisa el historial de pedidos que se han estado realizando y su estado."
			/>
			{orders.length > 0 ? (
				<Table headers={ORDER_TABLE_HEADERS}>
					{orders.map((order, index) => (
						<TableOrderRow
							key={order.id}
							index={index}
							order={order}
						/>
					))}
				</Table>
			) : (
				<GuideMessage>Cargando...</GuideMessage>
			)}
		</DashboardLayout>
	);
};

export default OrderView;
