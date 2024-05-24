import React, { Fragment, useState } from 'react';
import { parseText } from 'util/helpers';
import CheckAnswers from './CheckAnswers';

const PreviewQuestion = ({
	question = '',
	originalAnswers = {}
}) => {
	const parts = parseText(question);
	const [answers, setAnswers] = useState({});
	const [checkAns, setCheckAns] = useState(false);

	const handleOnChange = (e) => {
		const name = e.target.name;
		const val = e.target.value;

		setAnswers({
			...answers,
			[name]: val
		})
	}


	return (
		<div className='w-full flex flex-col gap-4 px-2'>
			<p className=' text-justify'>
				{parts.map(({ text, indx: keyIndx, isBlank }, indx) => {
					if (isBlank) {
						return (
							<Fragment key={indx}>
								<b>
									&nbsp;{keyIndx}.&nbsp;
								</b>
								<span className='w-fit'>
									<input
										placeholder="Write answer"
										className=' w-40 px-2 my-0.5 rounded border border-slate-400 focus:border-slate-600 focus:outline-0 '
										name={text}
										value={answers[text] || ''}
										onChange={handleOnChange}
									/>
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


			{checkAns &&
				<CheckAnswers
					parts={parts}
					originalAnswers={originalAnswers}
					answers={answers}
				/>
			}

			<button
				className='mx-auto w-full max-w-80 p-2 rounded-md bg-blue-600 text-white'
				onClick={() => setCheckAns(!checkAns)}
			>
				{checkAns ? "HIDE ANSWERS" : "CHECK ANSWERS"}
			</button>
		</div>
	)
}

export default PreviewQuestion