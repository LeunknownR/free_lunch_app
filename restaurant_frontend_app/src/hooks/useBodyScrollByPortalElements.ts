/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import PORTAL_WRAPPER_ID from "../utils/constants";

const useBodyScrollByPortalElements = (flag: boolean) => {
	useEffect(() => {
		const $elements = getElements();
		if (noHiddenElements($elements)) 
			showBodyScroll(false);
		else showBodyScroll(true);
	}, [flag]);
	function getElements(): NodeListOf<Element> {
		return document.querySelectorAll(`#${PORTAL_WRAPPER_ID} > *`);
	}
	function showBodyScroll(show: boolean) {
		document.body.classList[show ? "remove" : "add"]("no-scroll");
	}
	function noHiddenElements($elements: NodeListOf<Element>) {
		return Array.from($elements).some($element => {
			return !$element.classList.contains("hidden");
		});
	}
}	
	
export default useBodyScrollByPortalElements;