import React from 'react'

const FlightDetailsHeader = ({
	destination = "",
	tripType = "",
	date = "",
	duration = 0,
	countStopage = ""
}) => {
	return (
		<div className='w-full flex justify-between s500:items-center py-4 px-5 border-b boreder-[#EBF0F5]'>
			<div className='flex items-center gap-4'>
				<div className='w-6 min-w-6 h-6 flex justify-center items-center rounded-full bg-[#1882FF]'>
					<p className='font-semibold text-sm text-white'>
						1
					</p>
				</div>
				<div className='flex flex-col'>
					<p className='font-semibold text-lg text-[#1A2B3D]'>
						{destination}
					</p>
					<div className='flex flex-wrap items-center gap-1.5'>
						<p className='text-[13px] text-[#5A6573]'>
							{tripType}
						</p>
						<div className='w-[3px] h-[3px] rounded-full bg-[#9BA6B2]' />
						<p className='text-[13px] text-[#5A6573]'>
							{date}
						</p>
						<div className='w-[3px] h-[3px] rounded-full bg-[#9BA6B2]' />
						<p className='text-[13px] text-[#5A6573]'>
							{countStopage} Stop
						</p>
					</div>
				</div>
			</div>
			<div className='h-fit py-1 px-2 rounded-full bg-[#E8F3FF]'>
				<p className='font-medium text-xs whitespace-nowrap text-[#1882FF]'>
					{duration}
				</p>
			</div>
		</div>
	)
}

export default FlightDetailsHeader