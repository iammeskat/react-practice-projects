import React, { useEffect, useState } from 'react';

const DebounceInput = ({
	name,
	value,
	placeholder,
	onChange = () => { },
	delay=500,
}) => {
	const [inputValue, setInputValue] = useState("");


	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	useEffect(() => {
		setInputValue(value)
	}, [value])

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			onChange(inputValue);
		}, delay);
		return () => clearTimeout(timeoutId);
	}, [inputValue, delay, onChange]);

	return <textarea
		name={name}
		value={inputValue}
		onChange={handleInputChange}
		placeholder={placeholder}
		rows={7}
		className='w-full px-2 py-1 rounded border border-slate-400 focus:border-slate-600 focus:outline-0'
	/>;
};
export default DebounceInput