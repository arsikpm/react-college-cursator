import React from 'react'
import IMG_2 from '../../assets/images/courses/img-2.svg'
import './courses.css'

const CardАL = () => {
	const item = {
		title: 'Создание контента',
		amount: '300',
		img: IMG_2,
	}
	return (
		<div className='courses__content'>
			<div className='courses__text'>
				<div className='courses__amount'>{item.amount} курсов</div>
				<p className='courses__title'>{item.title}</p>
			</div>
			<div>
				<img className='courses__img' src={item.img} alt='programming' />
			</div>
		</div>
	)
}

export default CardАL
