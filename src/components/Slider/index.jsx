import React, { useEffect, useRef, useState } from 'react';
// import useWindowSize from '../../hooks/useWindowSize';
import useWindowSize from 'hooks/useWindowSize';
import SliderController from './components/SliderController';
import styles from './style.module.css';


/**
	  *
	  * @param gap gap in pixel between slide.
	  * @param gapSm gap in pixel for small screen.
	  * @param cardWidth slide width in pixel.
	  * @param cardWidthSm slide width for small screen.
	  * @param slides list of slides.
	  * @param controllerPosition center | center-out | center-in | center-bottom | right-bottom | right-top | left-bottom | left-top.
	  * @param hideDisbaleButton hide slider disable button.
	  * @param hideControllerInSm hide controller in small screen.
	  * @param prevBtnIcon custom icon link for previous button.
	  * @param nextBtnIcon custom icon link for next button.
	  * @param buttonStyles custom style for slider button.
	  *
**/

const OstadSlider = ({
	gap = 16,
	gapSm = 0,
	cardWidth = 350,
	cardWidthSm = 0,
	slides = [],
	controllerPosition = 'center',
	hideDisableButton = false,
	hideControllerInSm = false,
	prevBtnIcon = '',
	nextBtnIcon = '',
	buttonStyles = {}
}) => {

	const ref = useRef();
	const [scrolling, setScrolling] = useState(false);
	const [disableLeft, setDisableLeft] = useState(true);
	const [disableRight, setDisableRight] = useState(true);
	const [touchStartPosition, setTouchStartPosition] = useState(null);
	const { width: windowWidth = 0 } = useWindowSize();
	const slideWidth = windowWidth > 768 ? cardWidth : (cardWidthSm || cardWidth);
	const slideGap = windowWidth > 768 ? gap : (gapSm || gap);

	useEffect(() => {
		if (ref?.current) {
			const currentPosition = ref?.current?.scrollLeft || 0;
			const viewPortWidth = ref?.current?.clientWidth;
			const fullWidth = ref?.current?.scrollWidth;
			if ((currentPosition + viewPortWidth) !== fullWidth) {
				setDisableRight(false);
			} else {
				setDisableRight(true);
			}
			if (currentPosition) {
				setDisableLeft(false);
			} else {
				setDisableLeft(true);
			}
		}
	}, [ref, scrolling]);

	const handleNext = (next = true) => {

		const slideSizeWithGap = slideWidth + slideGap;
		const currentPosition = ref?.current?.scrollLeft || 0;
		const viewPortWidth = ref?.current?.clientWidth;
		const fullWidth = ref?.current?.scrollWidth;

		if (next) {
			const currentPositionX = (currentPosition + slideSizeWithGap);
			const newPosition = (Math.ceil(currentPositionX / slideSizeWithGap) * slideSizeWithGap)
			ref?.current?.scrollTo({
				left: newPosition,
				behavior: 'smooth',
			});
			if (disableLeft) {
				setDisableLeft(false);
			}
			if (fullWidth <= (viewPortWidth + newPosition)) {
				setDisableRight(true);
			}
		} else {
			const currentPositionX = (currentPosition - slideSizeWithGap);
			const newPosition = (Math.ceil(currentPositionX / slideSizeWithGap) * slideSizeWithGap)
			ref?.current?.scrollTo({
				left: newPosition,
				behavior: 'smooth',
			});
			if (disableRight) {
				setDisableRight(false);
			}
			if (newPosition <= 0) {
				setDisableLeft(true)
			}
		}
	}

	const handleTouchStart = (e) => {
		setTouchStartPosition(e?.changedTouches?.[0]?.clientX);
	}

	const handleTouchEnd = (e) => {
		const endPosition = e?.changedTouches?.[0]?.clientX;
		if (touchStartPosition > endPosition) {
			handleNext(true)
		} else if (touchStartPosition < endPosition) {
			handleNext(false)
		}
	}

	return (
		<div className={styles.wrapper}>
			<div
				ref={ref}
				className={styles.slider}
				style={{ gap: `${slideGap}px` }}
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
				onScroll={() => setScrolling(!scrolling)}
			>
				{slides.map((slide, indx) => (
					<div
						key={`slide-${indx}`}
						style={{
							width: `${slideWidth}px`,
							minWidth: `${slideWidth}px`,
						}}
					>
						{slide}
					</div>
				))}
			</div>

			{!(hideControllerInSm && windowWidth < 600) &&
				<SliderController
					disableLeft={disableLeft}
					disableRight={disableRight}
					handleNext={handleNext}
					position={controllerPosition}
					hideDB={hideDisableButton}
					prevBtnIcon={prevBtnIcon}
					nextBtnIcon={nextBtnIcon}
					styles={buttonStyles}
				/>
			}

		</div>
	)
}

export default OstadSlider