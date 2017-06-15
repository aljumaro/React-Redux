import React from 'react';

import FilterLink from './filterLink';

const Footer = () => {

	return (
		<p>
			Show: &nbsp;
			<FilterLink filter='SHOW_ALL'>All</FilterLink>&nbsp;
			<FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>&nbsp;
			<FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>&nbsp;
		</p>
	)
}

export default Footer