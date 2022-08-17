import React, { useEffect, useState } from "react";
import classes from "./styleComponents/Header.module.css";
import OneCurrency from "./OneCurrency";

function Header() {
	const [dataCurrencies, setDataCurrencies] = useState([]);
	const [USD, setUSD] = useState([]);
	const [EUR, setEUR] = useState([]);
	const [GBP, setGBP] = useState([]);

	useEffect(() => {
		setCurrencies();
	}, [dataCurrencies]);

	function getCurrency(name) {
		let a = [];
		dataCurrencies.map((currency) => {
			if (currency.cc === name) {
				a.push(currency);
				return {};
			} else return {};
		});

		return a;
	}

	function setCurrencies() {
		if (USD.length === 0) {
			let a = getCurrency("USD");
			setUSD(a);
		}
		if (EUR.length === 0) {
			setEUR(getCurrency("EUR"));
		}
		if (GBP.length === 0) {
			setGBP(getCurrency("GBP"));
		}
	}

	function getLatest() {
		if (dataCurrencies.length === 0) {
			fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
				.then((response) => {
					return response.json();
				})
				.then((result) => {
					console.log(result);
					setDataCurrencies(result);
				});
		}
	}

	// const [USD, setUSD] = useStateWithCallback([], () => {
	// 	if (USD.length === 0) {
	// 		setUSD(getCurrency("USD"));
	// 	}
	// });
	// const [EUR, setEUR] = useStateWithCallback([], () => {
	// 	if (EUR.length === 0) {
	// 		setEUR(getCurrency("EUR"));
	// 	}
	// });
	// const [GBP, setGBP] = useStateWithCallback([], () => {
	// 	if (GBP.length === 0) {
	// 		setGBP(getCurrency("GBP"));
	// 	}
	// });

	// console.log(dataCurrencies);
	getLatest();
	return (
		<header className={classes.main}>
			<OneCurrency props={USD}></OneCurrency>
			<OneCurrency props={EUR}></OneCurrency>
			<OneCurrency props={GBP}></OneCurrency>
		</header>
	);
}

export default Header;
