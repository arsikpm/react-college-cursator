import React from 'react'
import { Link } from 'react-scroll'
import SCR from '../../assets/images/footer/up.svg'
import './scrollup.css'

const ScrollUp = () => {
	return (
		<Link to='home' smooth={true} duration={150} className='scroll-up'>
			<img className='scroll-up__icon' src={SCR} alt='icon scroll' />
		</Link>
	)
}

export default ScrollUp
