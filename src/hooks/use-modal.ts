import { useState } from 'react';

export const useModal = (initialState: boolean) => {
	const [isOpen, setIsOpen] = useState(initialState);

	const toggle = () => {
		setIsOpen((prev) => !prev);
	};

	return {
		isOpen,
		toggle,
	};
};
