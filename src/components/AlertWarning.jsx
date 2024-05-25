import React from 'react'

const AlertWarning = ({ message = "" }) => {
	return (
		<div className='w-full flex items-center gap-2 px-3 py-2 rounded-md border border-[#FFE1C2] bg-[#FFEEDB]'>
			<img
				className='w-5 min-w-5 h-5'
				alt="warning"
				src="/icons/Warning.svg"
			/>
			<p className='text-xs text-[#3E4957]'>
				{message}
			</p>
		</div>
	)
}

export default AlertWarning