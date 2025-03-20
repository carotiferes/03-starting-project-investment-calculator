import CustomInput from "./CustomInput";

export default function UserInput({values, onAnyValueChange}) {
  const handleInputChange = onAnyValueChange;

	return (
		<section id="user-input">
			<div className="input-group">
        {/* aca no hacia falta hacer un CustomInput, podía usar directo input */}
				<CustomInput
					label="Initial Investment"
					id="initialInvestment"
					value={values.initialInvestment}
					onChangeInput={(event) =>
						handleInputChange("initialInvestment", event.target.value) // event.target.number is ALWAYS a string
					}
					required
				/>
				<CustomInput
					label="Annual Investment"
					id="annualInvestment"
					value={values.annualInvestment}
					onChangeInput={(event) =>
						handleInputChange("annualInvestment", event.target.value)
					}
					required
				/>
			</div>

			<div className="input-group">
				<CustomInput
					label="Expected Return"
					id="expectedReturn"
					value={values.expectedReturn}
					onChangeInput={(event) =>
						handleInputChange("expectedReturn", event.target.value)
					}
					required
				/>
				<CustomInput
					label="Duration"
					id="duration"
					value={values.duration}
					onChangeInput={(event) =>
						handleInputChange("duration", event.target.value)
					}
					required
				/>
			</div>
		</section>
	);
}
