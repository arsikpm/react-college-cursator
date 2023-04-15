import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import COINS from '../../assets/images/top_courses/coins.svg'
import IMG from '../../assets/images/top_courses/python_banner.webp'
import STAR from '../../assets/images/top_courses/star.svg'
import './topcrs.css'

const TopCourses = () => {
	return (
		<section className='topcrs container section' id='topcrs'>
			<div className='topcrs__top'>
				<div className='topcrs__left'>
					<h2 className='topcrs__title'>Топ курсов</h2>
				</div>
				<div className='topcrs__right'>
					<div>
						<span>Программирование</span>
						<FiChevronDown />
					</div>
				</div>
			</div>
			<div className='topcrs__items grid'>
				<article className='topcrs__item'>
					<div className='topcrs__category'>
						<div className='topcrs__labels'>
							<div className='topcrs_label'>Программирование</div>
							<div className='topcrs_label'>Python</div>
							<div className='topcrs_label'>Skillbox</div>
						</div>
						<img className='topcrs__img' src={IMG} alt='' />
					</div>
					<div className='topcrs__main'>
						<div className='topcrs__head'>
							<h1 className='topcrs__topic'>Веб-разработчик</h1>
							<div className='topcrs__rating'>
								<img src={STAR} alt='' />
								<div className='topcrs__rating-text'>
									<h2>4.9</h2>
									<span>(122)</span>
								</div>
							</div>
						</div>
						<div className='topcrs__description'>
							<div className='topcrs__text'>
								<span>
									<b>Начало:</b> 17.08.2021
								</span>
							</div>
							<div className='topcrs__text'>
								<span>
									<b>Длительность:</b> 8 месяцев
								</span>
							</div>
							<div className='topcrs__text'>
								<span>
									<b>Занятия:</b> 2-3 занятия в неделю
								</span>
							</div>
							<div className='topcrs__text'>
								<span>
									<b>Формат:</b> онлайн-лекции, домашние задания с фидбеком от
									преподавателей
								</span>
							</div>
							<div className='topcrs__text'>
								<span>
									<b>Особенности:</b> постоянная практика, актуальная программа
									обучения, чат с одногруппниками. После обучение все студенты
									проходят стажировку
								</span>
							</div>
						</div>
						<div className='topcrs__price'>
							<div className='topcrs__price-left'>
								<img src={COINS} alt='' />
								<div>17 150 &#8381; / курс</div>
							</div>
							<div className='topcrs__price-right'>
								<div>От 2 777 &#8381;/мес</div>
							</div>
						</div>
					</div>
					<div className='topcrs__footer'>
						<span>Курс на gb.ru</span>
					</div>
				</article>
				<article className='topcrs__item'>
					<div className='topcrs__category'>
						<div className='topcrs__labels'>
							<div className='topcrs_label'>Программирование</div>
							<div className='topcrs_label'>Python</div>
							<div className='topcrs_label'>Skillbox</div>
						</div>
						<img className='topcrs__img' src={IMG} alt='' />
					</div>
					<div className='topcrs__main'>
						<div className='topcrs__head'>
							<h1 className='topcrs__topic'>Веб-разработчик</h1>
							<div className='topcrs__rating'>
								<img src={STAR} alt='' />
								<div className='topcrs__rating-text'>
									<h2>4.9</h2>
									<span>(122)</span>
								</div>
							</div>
						</div>
						<div className='topcrs__description'>
							<div className='topcrs__text'>
								<span>
									<b>Начало:</b> 17.08.2021
								</span>
							</div>
							<div className='topcrs__text'>
								<span>
									<b>Длительность:</b> 8 месяцев
								</span>
							</div>
							<div className='topcrs__text'>
								<span>
									<b>Занятия:</b> 2-3 занятия в неделю
								</span>
							</div>
							<div className='topcrs__text'>
								<span>
									<b>Формат:</b> онлайн-лекции, домашние задания с фидбеком от
									преподавателей
								</span>
							</div>
							<div className='topcrs__text'>
								<span>
									<b>Особенности:</b> постоянная практика, актуальная программа
									обучения, чат с одногруппниками. После обучение все студенты
									проходят стажировку
								</span>
							</div>
						</div>
						<div className='topcrs__price'>
							<div className='topcrs__price-left'>
								<img src={COINS} alt='' />
								<div>17 150 &#8381; / курс</div>
							</div>
							<div className='topcrs__price-right'>
								<div>От 2 777 &#8381;/мес</div>
							</div>
						</div>
					</div>
					<div className='topcrs__footer'>
						<span>Курс на gb.ru</span>
					</div>
				</article>
				<article className='topcrs__item'>
					<div className='topcrs__category'>
						<div className='topcrs__labels'>
							<div className='topcrs_label'>Программирование</div>
							<div className='topcrs_label'>Python</div>
							<div className='topcrs_label'>Skillbox</div>
						</div>
						<img className='topcrs__img' src={IMG} alt='' />
					</div>
					<div className='topcrs__main'>
						<div className='topcrs__head'>
							<h1 className='topcrs__topic'>Веб-разработчик</h1>
							<div className='topcrs__rating'>
								<img src={STAR} alt='' />
								<div className='topcrs__rating-text'>
									<h2>4.9</h2>
									<span>(122)</span>
								</div>
							</div>
						</div>
						<div className='topcrs__description'>
							<div className='topcrs__text'>
								<span>
									<b>Начало:</b> 17.08.2021
								</span>
							</div>
							<div className='topcrs__text'>
								<span>
									<b>Длительность:</b> 8 месяцев
								</span>
							</div>
							<div className='topcrs__text'>
								<span>
									<b>Занятия:</b> 2-3 занятия в неделю
								</span>
							</div>
							<div className='topcrs__text'>
								<span>
									<b>Формат:</b> онлайн-лекции, домашние задания с фидбеком от
									преподавателей
								</span>
							</div>
							<div className='topcrs__text'>
								<span>
									<b>Особенности:</b> постоянная практика, актуальная программа
									обучения, чат с одногруппниками. После обучение все студенты
									проходят стажировку
								</span>
							</div>
						</div>
						<div className='topcrs__price'>
							<div className='topcrs__price-left'>
								<img src={COINS} alt='' />
								<div>17 150 &#8381; / курс</div>
							</div>
							<div className='transition: 200ms ease-in-out;'>
								<div>От 2 777 &#8381;/мес</div>
							</div>
						</div>
					</div>
					<div className='topcrs__footer'>
						<span>Курс на gb.ru</span>
					</div>
				</article>
			</div>
		</section>
	)
}

export default TopCourses
