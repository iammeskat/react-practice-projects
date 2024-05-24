import React, { Fragment } from 'react';

const CheckAnswers = ({
	parts = [],
	originalAnswers = {},
	answers = {}
}) => {
	return (
		<div className='w-full pt-2 border-t border-slate-300'>
			<p className='text-sm font-semibold'>
					Your Answers
				</p>
			<p className=' text-justify'>
				{parts.map(({ text, indx: keyIndx, isBlank }, indx) => {
					if (isBlank) {
						const { ans = '', isCaseSensitive = false } = originalAnswers[text] || {}
						const isCorrect = isCaseSensitive ? (
							answers[text] === ans
						) : (
							answers[text]?.toLowerCase() === ans?.toLowerCase()
						);

						return (
							<Fragment key={indx}>
								<b>
									&nbsp;{keyIndx}.&nbsp;
								</b>
								<span className={`w-fit px-2 my-1 rounded border ${isCorrect ? '!border-green-600 text-green-600 bg-green-100' : '!border-red-600 text-red-600 bg-red-100'}`}>
									{answers[text] || "[Not Answer]"}
								</span>
							</Fragment>
						)
					} else {
						return (
							<Fragment key={indx}>
								{text}
							</Fragment>
						);
					}
				})}
			</p>
		</div>
	)
}

export default CheckAnswers