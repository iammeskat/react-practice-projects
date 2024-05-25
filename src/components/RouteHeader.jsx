import React from 'react'

const RouteHeader = ({
	isStopage = false,
	isFinalDestination = false,
	location = "",
	airportName = "",
	terminal = "",
	duration = ""
}) => {
	return (
		<div className='w-full flex items-center justify-between gap-3 py-1'>
			<div className='w-9 h-9 flex items-center justify-center'>
				<img
					className='w-6 h-6'
					alt='location'
					src={isFinalDestination?"/icons/LocationBlue.svg":"/icons/Location.svg"}
				/>
			</div>
			<div className={`grow flex flex-col sm:flex-row justify-between sm:items-center px-4  pt-[10px] pb-3 rounded-md ${isStopage ? 'bg-[#E8F3FF]' : 'bg-[#F5F7FA]'}`}>
				<p className='font-[475] text-[13px] text-[#1A2B3D]'>
					{isStopage ? `Layover at ${location}: ${duration}` : (isFinalDestination ? `Destination at ${location}` : `Departure from ${location}`)}
				</p>
				<p className=' text-[13px] text-[#5A6573]'>
					{terminal &&
						<span className='font-[475]'>{terminal}:</span>
					} {airportName}
				</p>
			</div>
		</div>
	)
}

export default RouteHeader