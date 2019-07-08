import React from "react";
import PropTypes from "prop-types";

export default class Contador extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<span className="badge badge-dark">
				{"tienes " + this.props.lista.length + " tareas pendientes"}
			</span>
		);
	}
}
Contador.propTypes = {
	lista: PropTypes.array
};
