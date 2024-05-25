import React from 'react'
import AlertWarning from './AlertWarning'
import RouteHeader from './RouteHeader'
import RouteLine from './RouteLine'

const FlightRoute = ({ data = {} }) => {
	const {
		is_stopage = false,
		is_final_destination = false,
		location = "Dhaka",
		airport_name = "Hazrat Shahjalal International Airport",
		terminal = "Terminal 1",
		destination = "",
		duration = "",
		airlines_name = "",
		flight_no = "",
		airplane_model = "",
		seat_class = "",
		date_time_1 = {},
		date_time_2 = {},
		message = "",

	} = data;
	return (
		<div className='w-full flex flex-col'>
			<RouteHeader
				isStopage={is_stopage}
				isFinalDestination={is_final_destination}
				location={location}
				airportName={airport_name}
				terminal={terminal}
				duration={duration}
			/>

			{!is_final_destination &&
				<>
					<div className='w-full flex items-center justify-between gap-3 pt-3'>
						<div className='w-8 min-w-8 h-8 flex items-center justify-center'>
							<img
								className='w-6 h-6'
								alt='location'
								src="/icons/Emirates.svg"
							/>
						</div>
						<div className='grow grid grid-cols-1 s500:grid-cols-3 gap-3'>
							<PathTimeInfo
								title={destination}
								subTitle={duration}
							/>
							<PathTimeInfo
								title={date_time_1.time}
								subTitle={date_time_1.date}
							/>
							<PathTimeInfo
								title={date_time_2.time}
								subTitle={date_time_2.date}
							/>
						</div>
					</div>

					<div className='w-full h-fit flex justify-between items-stretch gap-3'>
						<RouteLine />
						<div className='grow flex flex-col gap-4 py-4'>
							<div className='grow grid grid-cols-1 s500:grid-cols-2 md:grid-cols-3 gap-3'>
								<div className='w-full flex flex-col gap-1.5'>
									<p className='font-[475] text-sm text-[#3E4957]'>
										{airlines_name}
									</p>
									<p className='text-sm text-[#5A6573]'>
										Flight no : {flight_no}
									</p>
								</div>
								<div className='w-full flex flex-col gap-1.5'>
									<p className='text-sm text-[#5A6573]'>
										{airplane_model}
									</p>
									<p className='text-sm text-[#5A6573]'>
										Class : <span className='font-[475] '>{seat_class}</span>
									</p>
								</div>
							</div>
							{message &&
								<AlertWarning message={message} />
							}
						</div>
					</div>
				</>
			}
		</div>
	)
}

const PathTimeInfo = ({ title = '', subTitle = '' }) => (
	<div className='w-full flex flex-col gap-0.5'>
		<p className='font-semibold text-base text-[#1A2B3D]'>
			{title}
		</p>
		<p className='text-sm text-[#5A6573]'>
			{subTitle}
		</p>
	</div>
)

export default FlightRoute