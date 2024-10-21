import React, { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

const flowerPositions = [
	[14, 110],
	[56, 26],
	[92, 159],
	[127, 75],
	[160, 20],
	[199, 106],
	[248, 11],
	[284, 130],
	[329, 67],
	[389, 110],
	[429, 26],
	[487, 159],
	[515, 75],
	[585, 106],
	[614, 11],
	[638, 150],
	[692, 90],
	[732, 26],
	[767, 159],
	[799, 75],
	[896, 105],
	[930, 11],
	[976, 130],
	[1001, 67],
	[1046, 160],
	[1109, 110],
	[1149, 26],
	[1187, 159],
	[1215, 75],
	[1285, 106],
	[1314, 11],
	[1358, 130],
	[1396, 67],
	[1448, 26],
	[1452, 129],
	[1509, 75],
	[1543, 20],
	[1587, 96],
	[1616, 150],
	[1657, 11],
	[1696, 130],
	[1701, 67],
];

function App() {
	const [heightUpdate, setHeightUpdate] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setHeightUpdate(true);
		}, 1000);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Congratulations to the Winner!!</h1>
			</header>

			{flowerPositions.map(
				([x, y]) =>
					x < window.innerWidth - 50 && (
						<img
							src={logo}
							className="App-logo"
							alt="logo"
							style={{
								top:
									y + (heightUpdate ? window.innerHeight : 0),
								left: x,
							}}
						/>
					)
			)}
		</div>
	);
}

export default App;
