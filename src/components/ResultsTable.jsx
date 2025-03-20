import { formatter } from "../util/investment";
import { calculateInvestmentResults } from "../util/investment";

export default function ResultsTable({values}) {
  const data = calculateInvestmentResults(values);
	const initialInvestment = data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
  
	return (
		<div>
			<table id="result" className="center">
				<thead>
					<tr>
						<th>Year</th>
						<th>Investment Value</th>
						<th>Interest (Year)</th>
						<th>Total Interest</th>
						<th>Invested Capital</th>
					</tr>
				</thead>
				<tbody>
					{data
						? data.map((yearlyData) => (
								<tr key={"data-" + yearlyData.year}>
									<td>{yearlyData.year}</td>
									<td>{formatter.format(yearlyData.valueEndOfYear)}</td>
									<td>{formatter.format(yearlyData.interest)}</td>
									<td>
										{formatter.format(
											yearlyData.valueEndOfYear -
												yearlyData.annualInvestment * yearlyData.year -
												initialInvestment
										)}
									</td>
									<td>
										{formatter.format(
											yearlyData.valueEndOfYear -
												(yearlyData.valueEndOfYear -
													yearlyData.annualInvestment * yearlyData.year -
													initialInvestment)
										)}
									</td>
								</tr>
						  ))
						: "No results yet!"}
				</tbody>
			</table>
		</div>
	);
}
