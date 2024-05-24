import React, { useEffect, useState } from 'react';
import { sampleQuestion } from 'util/data';
import { parseText } from 'util/helpers';
import DebounceInput from './components/DebounceInput';
import InputAnswer from './components/InputAnswer';

const CreateQuestion = ({
	question = '',
	setQuestion = () => { },
	answers = [],
	setAnswers = () => { },
}) => {
	const [text, setText] = useState(sampleQuestion);
	const parts = parseText(text);

	useEffect(() => {
		setQuestion(parts.map(item => (
			item.isBlank ? `{{${item.text}}}` : item.text
		))?.join(''));
	}, [parts, setQuestion]);


	const handleSetAnswer = (key, val) => {
		setAnswers({
			...answers,
			[key]: val
		})
	}

	return (
		<div className='w-full flex flex-col gap-4 px-2'>
			<DebounceInput
				value={question}
				onChange={val => setText(val)}
				delay={1000}
			/>

			<div className='w-full flex flex-col gap-2'>
				<p className='text-sm font-semibold'>
					Set Answers
				</p>
				<div className='w-full grid grid-cols-1 smx:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2'>
					{parts.filter(item => (item.isBlank)).map(({ text: name }, indx) => (
						<InputAnswer
							key={indx}
							name={name}
							values={answers[name]}
							onChange={val => handleSetAnswer(name, val)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default CreateQuestion