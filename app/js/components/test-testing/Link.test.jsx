import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';

it('renders link correctly', () => {

	const component = renderer.create(<Link page="www.google.es">To google</Link>);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();

	tree.props.onMouseEnter();
	tree = component.toJSON();
  	expect(tree).toMatchSnapshot();

  	tree.props.onMouseLeave();
  	tree = component.toJSON();
  	expect(tree).toMatchSnapshot();

});

it('renders hash correctly', () => {

	const component = renderer.create(<Link>To google</Link>);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});