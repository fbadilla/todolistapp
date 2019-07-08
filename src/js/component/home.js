import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Input from "./input.js";
import Contador from "./contador.js";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lista: [
				{ label: "Make the bed", done: false },
				{ label: "Walk the dog", done: false },
				{ label: "Do the replits", done: false },
				{ label: "Walk the dog", done: false },
				{ label: "Do the replits", done: false }
			]
		};
		this.cambiarvalor = this.cambiarvalor.bind(this);
		this.borrar = this.borrar.bind(this);
	}
	cambiarvalor(valor) {
		let nuevo = this.state.lista;
		nuevo.push({
			label: valor,
			done: false
		});
		this.setState({
			lista: nuevo
		});
	}
	borrar(valor) {
		let eliminar = this.state.lista;
		eliminar = eliminar.filter(item => {
			return item !== valor;
		});

		this.setState({
			lista: eliminar
		});
	}

	render() {
		let lista = this.state.lista.map((item, i) => {
			return (
				<div key={i}>
					<a
						key={i}
						className="list-group-item list-group-item-action "
						data-toggle="tooltip">
						{item.label}
						<a
							className="float-right text-secondary"
							onClick={() => {
								this.borrar(item);
							}}>
							<i className="fas fa-times" />
						</a>
					</a>
				</div>
			);
		});

		return (
			<div className="text-center mt-5">
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col-4">
							<h1>Todos</h1>
							<Input valor={this.cambiarvalor} />
							{lista}
							<Contador lista={this.state.lista} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
