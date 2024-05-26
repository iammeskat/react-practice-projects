import Breadcrumb from 'components/Breadcrumb'
import FlightDetailsHeader from 'components/FlightDetailsHeader'
import FlightRoute from 'components/FlightRoute'
import React from 'react'
import { flightData } from 'util/data'

const FlightDetails = () => {
	const {
		flight_no = '',
		destination = '',
		trip_type = '',
		date = '',
		duration = '',
		count_stopage = 0,
		routes = []
	} = flightData;

	return (
		<div className='w-full flex flex-col gap-5'>
			<Breadcrumb links={[
				{ label: 'Home', href: "#" },
				{ label: 'Booking History', href: "#" },
				{ label: 'Flight', href: "#" },
				{ label: flight_no, href: "#" },
			]} />
			<div className='w-full flex flex-col rounded-lg overflow-hidden shadow-sm bg-white'>
				<FlightDetailsHeader
					destination={destination}
					tripType={trip_type}
					date={date}
					duration={duration}
					countStopage={count_stopage}
				/>
				<div className='w-full flex flex-col p-4'>
					{routes.map((route = {}, indx) => (
						<FlightRoute
							key={indx}
							data={route}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default FlightDetails