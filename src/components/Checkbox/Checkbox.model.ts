export interface CheckboxModel {
	label?: string;
	onChange?: (value: boolean) => void;
	align?: 'left' | 'right';
	value?: boolean;
}
