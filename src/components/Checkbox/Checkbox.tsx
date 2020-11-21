import React, { useState } from 'react';
import { CheckboxModel } from './Checkbox.model';
import './Checkbox.scss';

const Checkbox = ({ label, onChange, align = 'left', value = false }: CheckboxModel) => {
	const [checked, setChecked] = useState(value);
	const iconClassNames = ['checkbox-icon'];

	const onClick = () => {
		const value = !checked;
		setChecked(value);
		onChange && onChange(value);
	};

	if (checked) {
		iconClassNames.push('checkbox-icon-checked');
	}

	return (
		<div className={`checkbox checkbox-${align}`} onClick={onClick}>
			<div className={iconClassNames.join(' ')} />
			{label && <div className={`checkbox-label checkbox-label-${align}`}>{label}</div>}
		</div>
	);
};

export default Checkbox;
