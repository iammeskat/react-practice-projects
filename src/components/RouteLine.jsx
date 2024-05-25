import React from 'react'

const RouteLine = () => {
	return (
		<div className='w-8 min-w-8 h-auto flex flex-col items-center'>
			<div className='grow w-0.5 bg-[#D8E1EB]'/>
			<div className='w-8 h-8 flex justify-center items-center'>
				<img
					src='/icons/PlaneIcon.svg'
					alt="plane"
					className='w-4 h-4'
				/>
			</div>
			<div className='grow w-0.5 bg-[#D8E1EB]'/>
		</div>
	)
}

export default RouteLine