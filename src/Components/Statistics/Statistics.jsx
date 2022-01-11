import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export default function Statistics({
	good,
	neutral,
	bad,
	total,
	positivePercentage,
}) {
	return (
		<div>
			<ul>
				<li className={s.counter}>Good: {good}</li>
				<li className={s.counter}>Neutral: {neutral}</li>
				<li className={s.counter}>Bad: {bad}</li>
				<li className={s.counter}>Total:{total}</li>
				<li className={s.counter}>Positive feedback:{positivePercentage} %</li>
			</ul>
		</div>
	);
}
Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired,
};
