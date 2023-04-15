import React from 'react'
import { Link } from 'react-scroll'
import './home.css'

const Data = () => {
	return (
		<div className='home__data'>
			<h1 className='home__title'>Найди подходящий курс</h1>
			<p className='home__subtitle'>
				Мы — агрегатор-отзовик курсов. Выбирайте курсы по стоимости,
				длительности, дате начала и другим параметрам!
			</p>
			<div className='home__description'>
				<Link
					to='home'
					smooth={true}
					duration={150}
					offset={-100}
					className='button button--flex'
				>
					<span>Пройти тест</span>
				</Link>
				<div className='home__button-side'>
					<span>
						Не уверены, какую{' '}
						<a className='home__link' href='/'>
							профессию
						</a>{' '}
						выбрать?
					</span>
				</div>
			</div>
		</div>
	)
}

export default Data
