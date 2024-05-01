import Slider from 'components/Slider';
import SliderProps from 'components/SliderProps';
import React, { useEffect, useState } from 'react';

const App = () => {
	const [show, setShow] = useState(true);
	const [sliderProps, setSliderProps] = useState({
		gap: 16,
		gapSm: 8,
		cardWidth: 345,
		cardWidthSm: 250,
		controllerPosition: "center-bottom",
		hideDisableButton: false,
		prevBtnIcon: 'https://cdn.ostad.app/public/icons/arrow-left-s-line.svg',
		nextBtnIcon: 'https://cdn.ostad.app/public/icons/arrow-right-s-line.svg',
	})

	useEffect(() => {
		setShow(false);
		setTimeout(() => {
			setShow(true);
		}, 1);
	}, [sliderProps])

	const slides = [...Array(15).keys()].map((item, indx) => (
		<Card key={indx} indx={indx} />
	));

	return (
		<div className='w-full  py-8'>
			<div className='container flex flex-col gap-24'>
				<Slider
					gap={16}
					gapSm={8}
					cardWidth={300}
					cardWidthSm={250}
					controllerPosition="center-in"
					hideDisableButton={true}
					prevBtnIcon='https://cdn.ostad.app/public/icons/arrow-left-s-line.svg'
					nextBtnIcon='https://cdn.ostad.app/public/icons/arrow-right-s-line.svg'
					buttonStyles={{}}
					slides={[...Array(15).keys()].map((item, indx) => (
						<Card key={indx} indx={indx} height='48px' />
					))}
				/>
				<div className='w-full flex flex-col gap-4'>

					<div className='w-full min-h-[250px]'>
						{show &&
							<Slider
								{...sliderProps}
								gap={parseInt(sliderProps.gap)}
								gapSm={parseInt(sliderProps.gapSm)}
								cardWidth={parseInt(sliderProps.cardWidth)}
								cardWidthSm={parseInt(sliderProps.cardWidthSm)}
								slides={slides}
								buttonStyles={{}}
							/>
						}
					</div>

					<SliderProps
						sliderProps={sliderProps}
						setSliderProps={setSliderProps}
					/>
				</div>
			</div>
		</div >
	)
}

const Card = ({ indx, height = '192px' }) => (
	<div
		className='
		w-full p-2 rounded
		flex justify-center items-center font-bold text-4xl text-white
		bg-gradient-to-r from-blue-800 to-indigo-900
		'
		style={{ height }}
	>
		{indx}
	</div>
)

export default App
