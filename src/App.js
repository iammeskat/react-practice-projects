import CreateQuestion from 'components/CreateQuestion';
import PreviewQuestion from 'components/PreviewQuestion';
import React, { useState } from 'react';
import { sampleAnswers } from 'util/data';

const App = () => {
	const [question, setQuestion] = useState();
	const [originalAnswers, setOriginalAnswers] = useState(sampleAnswers);

	return (
		<div className='w-full min-h-screen  p-2 grid grid-cols-1 lg:grid-cols-2 gap-2 bg-slate-100'>

			<div className='w-full flex flex-col gap-2 border rounded overflow-hidden shadow-sm bg-white'>
				<div className='w-full px-2 py-1 bg-slate-600 text-white'>
					<b>
						Create Question
					</b>
				</div>
				<CreateQuestion
					question={question}
					setQuestion={setQuestion}
					answers={originalAnswers}
					setAnswers={setOriginalAnswers}
				/>
			</div>

			<div className='w-full flex flex-col gap-2 border rounded overflow-hidden shadow-sm bg-white'>
				<div className='w-full px-2 py-1 bg-slate-600 text-white'>
					<b>
						Preview Question
					</b>
				</div>
				<PreviewQuestion
					question={question}
					originalAnswers={originalAnswers}
				/>
			</div>
		</div >
	)
}



export default App
