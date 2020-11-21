import React from 'react';
import './Footer.scss';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className={'footer'}>
			<div>TODO List ©{year}</div>
			<div>Tomin Pavel</div>
		</div>
	);
};

export default Footer;
