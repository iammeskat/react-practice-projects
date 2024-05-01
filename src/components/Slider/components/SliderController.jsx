// import { cdn } from "@infrastructure/axios";

const SliderController = ({
	disableLeft = true,
	disableRight = true,
	handleNext = () => { },
	position = 'center',
	hideDB = false,
	prevBtnIcon = '',
	nextBtnIcon = '',
	styles = {}
}) => {
	const prevButton = (
		<button
			onClick={() => handleNext(false)}
			disabled={disableLeft}
			className={`
			${!(hideDB && disableLeft) ? 'w-10 h-10 opacity-100' : 'w-0 h-0 '}
			flex items-center justify-center rounded-full transition-all duration-300 shadow-md
			 ${disableLeft ? `bg-ostad-black-bg border cursor-not-allowed  ${hideDB ? '!opacity-0' : '!opacity-50'}` : 'bg-white hover:!bg-ostad-yellow-20 active:!bg-ostad-yellow-40 active:!scale-95'}
			`}
			style={styles}
		>
			<img
				className="w-6 h-6"
				src={prevBtnIcon || 'https://cdn.ostad.app/public/icons/arrow-left-line.svg'}
				alt=''
			/>
		</button>
	);

	const nextButton = (
		<button
			onClick={() => handleNext(true)}
			disabled={disableRight}
			className={`
			${!(hideDB && disableRight) ? 'w-10 h-10 opacity-100' : 'w-0 h-0 '}
			flex items-center justify-center rounded-full transition-all duration-300 shadow-md
			 ${disableRight ? `bg-ostad-black-bg border cursor-not-allowed ${hideDB ? '!opacity-0' : '!opacity-50'}` : 'bg-white hover:!bg-ostad-yellow-20 active:!bg-ostad-yellow-40 active:!scale-95'}
			`}
			style={styles}
		>
			<img
				className="w-6 h-6"
				src={nextBtnIcon || 'https://cdn.ostad.app/public/icons/arrow-right-line.svg'}
				alt=''
			/>
		</button>
	);

	const render = () => {
		switch (position) {
			case 'center-out':
				return (
					<>
						<div className={`absolute -left-14 `} >
							{prevButton}
						</div>

						<button className={`absolute -right-14`}>
							{nextButton}
						</button>
					</>
				);
			case 'center-in':
				return (
					<>
						<div className={`absolute left-1 `} >
							{prevButton}
						</div>

						<button className={`absolute right-1`}>
							{nextButton}
						</button>
					</>
				);
			case 'center-bottom':
				return (
					<div className="w-full flex justify-center items-center gap-4 mt-4">
						{prevButton}
						{nextButton}
					</div>
				);
			case 'right-bottom':
				return (
					<div className="w-full flex justify-end items-center gap-4 mt-4">
						{prevButton}
						{nextButton}
					</div>
				);
			case 'right-top':
				return (
					<div className="absolute -top-14 right-0 flex items-center gap-4">
						{prevButton}
						{nextButton}
					</div>
				);
			case 'left-bottom':
				return (
					<div className="w-full flex justify-start items-center gap-4 mt-4">
						{prevButton}
						{nextButton}
					</div>
				);
			case 'left-top':
				return (
					<div className="absolute -top-14 left-0 flex items-center gap-4">
						{prevButton}
						{nextButton}
					</div>
				);
			default:
				return (
					<>
						<div className={`absolute -left-5 `} >
							{prevButton}
						</div>

						<button className={`absolute -right-5`}>
							{nextButton}
						</button>
					</>
				);
		}
	}
	return (
		render()
	)
}

export default SliderController