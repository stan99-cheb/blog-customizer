import { useState } from 'react';

export const useModal = (
	initialState: boolean,
	ref: React.RefObject<HTMLElement>
) => {
	const [isOpen, setIsOpen] = useState(initialState);

	const handleKeyDown = (e: KeyboardEvent) => {
		e.key === 'Escape' && toggle();
	};

	const handleMouseDown = (e: MouseEvent) => {
		!ref.current?.contains(e.target as HTMLElement) && toggle();
	};

	const toggle = () => {
		setIsOpen((prev) => {
			if (!prev) {
				document.addEventListener('keydown', handleKeyDown);
				document.addEventListener('mousedown', handleMouseDown);
			} else {
				document.removeEventListener('keydown', handleKeyDown);
				document.removeEventListener('mousedown', handleMouseDown);
			}
			return !prev;
		});
	};

	return {
		isOpen,
		toggle,
	};
};
