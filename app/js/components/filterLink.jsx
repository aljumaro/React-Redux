import React, { Component } from 'react';
import { connect } from 'react-redux';

import appStore from '../stores/todoAppStore';
import { setVisibilityFilter } from '../actions/actions';
import Link from './link';

const mapStateToProps = (state, ownProps) => { //Container component ownProps passed as a second argument
	return {
		active: state.visibilityFilter === ownProps.filter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter))
		}
	}
}

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
) (Link);

//Container component
export default FilterLink;