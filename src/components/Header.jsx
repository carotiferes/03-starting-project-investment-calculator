import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
	return (
		<div id="header">
			<img src={logo} alt="Logo of investment calculator app" />
			<h1>Investment Calculator</h1>
		</div>
	);
}
