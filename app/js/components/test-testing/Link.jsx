import React from 'react';

const STATUS = {
	hovered: 'hovered',
	normal: 'normal'
};

export default class Link extends React.Component {

	constructor(props) {
		super(props);

		this._onMouseEnter = this._onMouseEnter.bind(this);
		this._onMouseLeave = this._onMouseLeave.bind(this);

		this.state = {
			className: STATUS.normal
		}
	}

	_onMouseEnter() {
		this.setState({className: STATUS.hovered});
	}

	_onMouseLeave() {
		this.setState({className: STATUS.normal});
	}

	render() {
		return (
			<a
				className={this.state.className}
				href={this.props.page || '#'}
				onMouseEnter={this._onMouseEnter}
				onMouseLeave={this._onMouseLeave}
			>
				{this.props.children}
			</a>
		)
	}

}
