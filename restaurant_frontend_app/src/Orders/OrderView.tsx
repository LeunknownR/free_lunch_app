import HeaderSection from "../components/HeaderSection";
import DashboardLayout from "../layout/DashboardLayout";

const OrderView = () => {
	return (
		<DashboardLayout>
			<HeaderSection
				title="Realiza un pedido"
				description="Dale click al botón inferior para pedir un nuevo plato."/>
			<HeaderSection
				title="Historial de pedidos"
				description="Revisa el historial de pedidos que se han realizado."/>
		</DashboardLayout>
	);
}

export default OrderView;