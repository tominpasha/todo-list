import React from 'react';
import './Header.scss';

const Header = () => {
	return (
		<div className={'listHeader'}>
			<div className={'listHeader-col listHeader-task'}>Task</div>
			<div className={'listHeader-col listHeader-done'}>Done</div>
			<div className={'listHeader-col listHeader-del'} />
		</div>
	);
};

export default Header;
