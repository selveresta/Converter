import React from "react";
import classes from "./styleComponents/OneCurrency.module.css";

function OneCurrency(props) {
	console.log(props.props);
	return (
		<div className={classes.mainBlock}>
			{props.props.length === 0 ? "" : props.props[0].cc}
			<span>{props.props.length === 0 ? "" : props.props[0].rate}</span>
		</div>
	);
}

export default OneCurrency;
