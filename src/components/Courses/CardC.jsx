import React from 'react'
import IMG_5 from '../../assets/images/courses/img-5.svg'
import './courses.css'

const CardC = () => {
	const item = {
		title: 'Управление',
		amount: '300',
		img: IMG_5,
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
