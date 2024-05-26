export const flightData = {
	flight_no: "STFL17121182045413",
	destination: "DAC → JFK",
	trip_type: "Round Trip",
	date: "25 Mar - 4 Apr 2023",
	duration: "33h 20m",
	count_stopage: 1,
	routes: [
		{
			location: "Dhaka",
			airport_name: "Hazrat Shahjalal International Airport",
			terminal: "Terminal 1",
			destination: "DAC - DXB",
			duration: "12 hr 20 min",
			airlines_name: "Turkish Airlines",
			flight_no: "TUR467",
			airplane_model: "Airbus Industrie 737-800-738",
			seat_class: "ECONOMY-Y (O)",
			date_time_1: {
				time: "07:30 PM",
				date: "28 Mar, Friday"
			},
			date_time_2: {
				time: "08:50 AM",
				date: "29 Mar, Saturday"
			},
			message: "Technical stoppage at Malpensa International Airport (Milano). Before booking this flight please check your visa requirements as per your nationality"
		}, {
			location: "Dubai",
			airport_name: "Dubai International Airport",
			terminal: "",
			destination: "DAC - DXB",
			duration: "12 hr 20 min",
			airlines_name: "Turkish Airlines",
			flight_no: "TUR467",
			airplane_model: "Airbus Industrie 737-800-738",
			seat_class: "ECONOMY-Y (O)",
			date_time_1: {
				time: "07:30 PM",
				date: "28 Mar, Friday"
			},
			date_time_2: {
				time: "08:50 AM",
				date: "29 Mar, Saturday"
			},
			is_stopage: true,
		}, {
			location: "New York",
			airport_name: "John F Kennedy International Airport",
			terminal: "Terminal 4",
			is_final_destination: true,
		}
	]
}