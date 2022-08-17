import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Converter from "./Components/Converter";

function App() {
	return (
		<div className='App'>
			<Header></Header>
			<Converter></Converter>
		</div>
	);
}

export default App;
