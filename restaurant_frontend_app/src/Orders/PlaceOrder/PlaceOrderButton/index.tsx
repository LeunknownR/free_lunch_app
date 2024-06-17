import FoodIcon from "../../../icons/FoodIcon";
import { Container } from "./styles";

type PlaceOrderButtonProps = {
	placeOrder: () => void;
};
const PlaceOrderButton = ({
	placeOrder
}: PlaceOrderButtonProps) => {
	return (
		<Container onClick={placeOrder}>
			<div className="icon"><FoodIcon/></div>
			<span>Pedir nuevo plato</span>
		</Container>
	);
}

export default PlaceOrderButton;