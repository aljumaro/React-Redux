import React from 'react';

import appStore from '../stores/todoAppStore';

const FilterLink = ({
	filter,
	current,
	children
}) => {

	if (current === filter) {
		return <span>{children}</span>
	}

	return (
		<a 
			href="#"
			onClick={(e) => {
				e.preventDefault();
				appStore.dispatch({
					type: 'SET_VISIBILITY_FILTER',
					filter: filter
				});
			}}
		>
			{children}
		</a>
		)
}

export default FilterLink