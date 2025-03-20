export default function CustomInput({label, onChangeInput, ...otherProps}) {
	return (
		<div>
			<label htmlFor={otherProps.id}>{label}</label>
			<input type="number" {...otherProps}
        onChange={onChangeInput}/>
		</div>
	);
}
