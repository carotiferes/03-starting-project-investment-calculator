import classes from './CustomInput.module.css'
export default function CustomInput({label, onChangeInput, ...otherProps}) {
	return (
		<div>
			<label htmlFor={otherProps.id} className={classes.testClass}>{label}</label>
			<input type="number" {...otherProps}
        onChange={onChangeInput}/>
		</div>
	);
}
