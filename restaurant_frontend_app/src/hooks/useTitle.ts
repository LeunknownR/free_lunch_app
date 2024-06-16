import { useEffect } from "react";

const BASE_TITLE = "Free Lunch App";
const useTitle = (value: string): void => {
	useEffect(() => {
		document.body.title = `${BASE_TITLE} | ${value}`;
	}, []);
}

export default useTitle;