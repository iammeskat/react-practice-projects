import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
	return (
		<div className='w-full h-screen flex flex-col bg-[#EBF0F5] overflow-y-auto'>
			<Nav />
			<div className='container grow'>
				<main className='h-full w-full flex gap-6 py-4'>
					<Sidebar />
					<div className='grow'>
						{children}
					</div>
				</main>
			</div>
		</div >
	)
}

export default Layout