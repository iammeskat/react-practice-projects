import React from 'react'

const CandidateInfo = () => {
	return (
		<div className='w-full flex flex-col justify-center items-center text-sm text-[#5A6573]'>
			<p>
				Submitted by
			</p>
			<p className='text-lg font-medium'>
				Meskatul Islam
			</p>
			<p>
				Email:&nbsp;
				<a
					href='mailto:meskatcse@gmail.com'
					className='hover:text-blue-600'
				>
					meskatcse@gmail.com
				</a>
			</p>
			<p>
				Web:&nbsp;
				<a
					className='hover:text-blue-600'
					href='https://iammeskat.github.io'
					target="_blank"
					rel="noreferrer"
				>
					iammeskat.github.io
				</a>
			</p>
			<p>
				Source Code:&nbsp;
				<a
					className='hover:text-blue-600'
					href='https://github.com/iammeskat/react-practice-projects/tree/sharetrip-task'
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</p>
		</div>
	)
}

export default CandidateInfo