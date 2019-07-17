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
			lista: [],
			userActive: "fcobad"
		};

		this.cambiarvalor = this.cambiarvalor.bind(this);
		this.borrar = this.borrar.bind(this);
	}
	cambiarvalor(valor) {
		let nuevo = this.state.lista;
		fetch(
			"https://3000-e3dea987-cf9c-440d-a15b-803e99f7cb9e.ws-us0.gitpod.io/api/todo/" +
				this.state.userActive,
			{
				method: "POST", // or 'PUT'
				body: JSON.stringify({
					label: valor,
					done: false,
					username: "fcobad"
				}), // data can be `string` or {object}!
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
			.then(resp => {
				return resp.json();
			})
			.then(response => this.obtenerListado())
			.catch(error => console.error("Error:", error));
	}
	obtenerListado() {
		fetch(
			"https://3000-e3dea987-cf9c-440d-a15b-803e99f7cb9e.ws-us0.gitpod.io/api/todo/" +
				this.state.userActive
		)
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				this.setState({ lista: data });
			});
	}

	componentDidMount() {
		this.obtenerListado();
	}

	borrar(valor) {
		let eliminar = this.state.lista;
		fetch(
			"https://3000-e3dea987-cf9c-440d-a15b-803e99f7cb9e.ws-us0.gitpod.io/api/todo/" +
				this.state.userActive,
			{
				method: "DELETE", // or 'PUT'
				// data can be `string` or {object}!
				headers: {
					"Content-Type": "application/json"
				}
			}
		).then(response => this.obtenerListado());
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
