import React from 'react'
import IMG_C from '../../assets/images/top_schools/coursera.svg'
import IMG_G from '../../assets/images/top_schools/geekbrains.svg'
import IMG_S from '../../assets/images/top_schools/skillbox.svg'
import './topsch.css'

const TopSchools = () => {
	return (
		<section className='tschools container section' id='tschools'>
			<h2 className='tschools__title'>Топ школ</h2>
			<div className='tschools__cards grid'>
				<div className='tschools__card'>
					<div className='tschools__img'>
						<img src={IMG_S} alt='' />
					</div>
				</div>
				<div className='tschools__card'>
					<div className='tschools__img'>
						<img src={IMG_S} alt='' />
					</div>
				</div>
				<div className='tschools__card'>
					<div className='tschools__img'>
						<img src={IMG_C} alt='' />
					</div>
				</div>
				<div className='tschools__card'>
					<div className='tschools__img'>
						<img src={IMG_G} alt='' />
					</div>
				</div>
				<div className='tschools__card'>
					<div className='tschools__img'>
						<img src={IMG_S} alt='' />
					</div>
				</div>
				<div className='tschools__card'>
					<div className='tschools__img'>
						<img src={IMG_S} alt='' />
					</div>
				</div>
				<div className='tschools__card'>
					<div className='tschools__img'>
						<img src={IMG_C} alt='' />
					</div>
				</div>
				<div className='tschools__card'>
					<div className='tschools__img'>
						<img src={IMG_G} alt='' />
					</div>
				</div>
				<div className='tschools__card'>
					<div className='tschools__img'>
						<img src={IMG_S} alt='' />
					</div>
				</div>
				<div className='tschools__card'>
					<div className='tschools__img'>
						<img src={IMG_S} alt='' />
					</div>
				</div>
				<div className='tschools__card'>
					<div className='tschools__img'>
						<img src={IMG_C} alt='' />
					</div>
				</div>
				<div className='tschools__card'>
					<div className='tschools__img'>
						<img src={IMG_G} alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default TopSchools
