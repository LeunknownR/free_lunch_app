import { createPortal } from "react-dom";
import PORTAL_WRAPPER_ID from "../../utils/constants";
import { Container } from "./styles";
import { PreloaderHook } from "./hooks/usePreloader";

const $portals = document.getElementById(PORTAL_WRAPPER_ID);
type PreloaderProps = {
	preloader: PreloaderHook;
};
const Preloader = ({
	preloader
}: PreloaderProps) => {
	return createPortal(
		<Container className={preloader.value ? "visible" : ""}>
			<div></div>
		</Container>,
		$portals as HTMLElement
	);
}

export default Preloader;