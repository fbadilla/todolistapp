import React from "react";
import PropTypes from "prop-types";

export default class Input extends React.Component {
	constructor(props) {
		super(props);
		this.textInput = React.createRef();
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}
	handleKeyDown = e => {
		if (e.key === "Enter") {
			this.props.valor(this.textInput.current.value);
			this.textInput.current.value = "";
		}
	};

	render() {
		return (
			<input
				type="text"
				className="form-control"
				aria-label="Sizing example input"
				aria-describedby="inputGroup-sizing-default"
				ref={this.textInput}
				onKeyDown={this.handleKeyDown}
			/>
		);
	}
}
Input.propTypes = {
	valor: PropTypes.func
};
