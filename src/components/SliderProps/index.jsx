import React from 'react';

const SliderProps = ({
	sliderProps = {},
	setSliderProps = () => { }
}) => {

	const handleOnChange = (event) => {
		let value = event.target.type === "checkbox"
			? event.target.checked
			: event.target.value;
		let name = event.target.name;
		setSliderProps({
			...sliderProps,
			[name]: value
		})
	}

	return (
		<div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2'>
			<Select
				name='controllerPosition'
				value={sliderProps.controllerPosition}
				onChange={handleOnChange}
				placeholder='select controller position'
				options={['center', 'center-out', 'center-in', 'center-bottom', 'right-bottom', 'right-top', 'left-bottom', 'left-top']}
			/>
			<Input
				type='number'
				name='cardWidth'
				value={sliderProps.cardWidth}
				onChange={handleOnChange}
				placeholder='card width in pixel'
			/>
			<Input
				type='number'
				name='cardWidthSm'
				value={sliderProps.cardWidthSm}
				onChange={handleOnChange}
				placeholder='card width in pixel for small screen'
			/>
			<Input
				type='number'
				name='gap'
				value={sliderProps.gap}
				onChange={handleOnChange}
				placeholder='gap in pixel'
			/>
			<Input
				type='number'
				name='gapSm'
				value={sliderProps.gapSm}
				onChange={handleOnChange}
				placeholder='gap in pixel for small screen'
			/>
			<Input
				type='checkbox'
				name='hideDisableButton'
				checked={sliderProps.hideDisableButton || false}
				onChange={handleOnChange}
			/>
			<Input
				type='checkbox'
				name='hideControllerInSm'
				checked={sliderProps.hideControllerInSm || false}
				onChange={handleOnChange}
			/>
			<Input
				name='prevBtnIcon'
				value={sliderProps.prevBtnIcon}
				onChange={handleOnChange}
				placeholder='icon link for previous button'
			/>
			<Input
				name='nextBtnIcon'
				value={sliderProps.nextBtnIcon}
				onChange={handleOnChange}
				placeholder='icon link for next button'
			/>
			<Input
				name='buttonStyles'
				value={sliderProps.buttonStyles}
				// onChange={handleOnChange}
				placeholder='style for controller buttons'
				disabled
			/>

		</div>
	)
}


const Input = ({
	name = '',
	value = '',
	placeholder = '',
	onChange = () => { },
	type = 'text',
	...props
}) => (
	<div className='w-full flex flex-wrap justify-between items-center border p-1.5 rounded'>
		<p>{name}:</p>
		<input
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className='max-w-full px-2 border border-slate-400 rounded'
			{...props}
		/>
	</div>
)

const Select = ({
	name = '',
	value = '',
	placeholder = '',
	onChange = () => { },
	options = [],
}) => (
	<div className='w-full flex flex-wrap justify-between items-center border p-1.5 rounded'>
		<p>{name}:</p>
		<select
			name={name}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			className='max-w-full px-2 border border-slate-400 rounded'
		>
			{options.map((option) => (
				<option
					value={option}
					key={option}
				>
					{option}
				</option>
			))}
		</select>
	</div>
)

export default SliderProps