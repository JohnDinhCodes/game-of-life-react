import React, { Component } from "react";

import Graph from "./components/graph/graph.component";

export default class App extends Component {
	render() {
		return (
			<div>
				<h1
					style={{
						textAlign: "center",
						fontSize: "3em",
						color: "#E5FCF5",
					}}
				>
					The Game of Life
				</h1>

				<Graph />
			</div>
		);
	}
}
