import React from 'react'
import CardАL from './CardAL'
import CardC from './CardC'
import CardCC from './CardCC'
import CardD from './CardD'
import CardM from './CardM'
import CardP from './CardP'
import './courses.css'

const Courses = () => {
	return (
		<section className='courses container section' id='courses'>
			<div className='wrapper'>
				<div className='wrapper__inner'>
					<h2 className='courses__title-main'>Направления курсов</h2>
					<div className='courses__container grid'>
						<CardP />
						<CardC />
						<CardD />
						<CardM />
						<CardАL />
						<CardCC />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Courses
