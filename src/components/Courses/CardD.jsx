import React from 'react'
import IMG_1 from '../../assets/images/courses/img-1.svg'
import './courses.css'

const CardC = () => {
	const item = {
		title: 'Дизайн',
		amount: '300',
		img: IMG_1,
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

export default CardC
