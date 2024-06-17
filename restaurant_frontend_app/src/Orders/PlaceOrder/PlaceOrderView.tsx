import { Container } from "./styles";
import HeaderSection from "../../components/HeaderSection";
import PlaceOrderButton from "./PlaceOrderButton";
import ViewAvailableFoodLink from "./ViewAvailableFoodLink";
import RepositoryProvider from "../../shared/infrastructure/persistence/RepositoryProvider";

const orderRepository = RepositoryProvider.getOrderRepository();
const PlaceOrderView = () => {
	function placeOrder(): void {
		orderRepository.createOrder();
	}
	return (
		<Container>
			<HeaderSection
				title="Realiza un pedido"
				description="Dale click al botón inferior para pedir un nuevo plato."/>
			<PlaceOrderButton placeOrder={placeOrder}/>
			<ViewAvailableFoodLink/>
		</Container>
	);
}

export default PlaceOrderView;