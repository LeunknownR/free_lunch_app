import { useState } from "react";

export type PreloaderHook = {
	show: () => void;
	hide: () => void;
	value: boolean;
};
const usePreloader = (): PreloaderHook => {
	const [visible, setVisible] = useState<boolean>(false);
	return {
		show: () => setVisible(true),
		hide: () => setVisible(false),
		value: visible
	};
}

export default usePreloader;