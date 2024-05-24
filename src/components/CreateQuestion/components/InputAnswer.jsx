import React from 'react';

const InputAnswer = ({
	name = "",
	values = {},
	onChange = () => { }
}) => {
	const handleOnChange = (e) => {
		const name = e.target.name;
		const val = e.target.type === "checkbox" ?
			e.target.checked : e.target.value;
		onChange({
			...values,
			[name]: val
		})
	}
	return (
		<div className='w-full flex flex-col gap-1 border p-2 rounded'>
			<div className='w-full flex justify-between items-center'>
				<label htmlFor={`label-${name}`}>
					{name?.length > 18 ? `${name.slice(0, 15)}...` : name}
				</label>
				<label className='flex items-center gap-1'>
					<input
						type="checkbox"
						name="isCaseSensitive"
						checked={values.isCaseSensitive || false}
						onChange={handleOnChange}
					/>
					<p className=' text-xs'>
						Case sensitive
					</p>
				</label>
			</div>
			<input
				id={`label-${name}`}
				placeholder={`Set answer for ${name}`}
				className='w-full px-2 rounded border border-slate-400 focus:border-slate-600 focus:outline-0 '
				name="ans"
				value={values.ans || ''}
				onChange={handleOnChange}
			/>
		</div>
	)
}

export default InputAnswer