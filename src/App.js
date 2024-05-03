import Slider from 'components/Slider';
import React from 'react';

const App = () => {


	const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	return (
		<div className='w-full  py-8'>
			<div className='container'>
				<div className='w-full min-h-[250px] mt-16'>
					<Slider
						gap={16}
						gapSm={8} // optional
						cardWidth={345}
						cardWidthSm={250} // optional
						controllerPosition={"center-bottom"}
						hideDisableButton={false}
						hideControllerInSm={false}
						prevBtnIcon={'https://cdn.ostad.app/public/icons/arrow-left-s-line.svg'}
						nextBtnIcon={'https://cdn.ostad.app/public/icons/arrow-right-s-line.svg'}
						buttonStyles={{}}

						slides={slides.map((item, indx) => (
							<Card
								key={indx}
								indx={item}
							/>
						))}

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
