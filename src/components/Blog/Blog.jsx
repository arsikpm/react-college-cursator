import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-scroll'
import IMG from '../../assets/images/blog/python_banner.webp'
import ICON from '../../assets/images/blog/right.svg'
import './blog.css'

const Blog = () => {
	return (
		<section className='blog container section' id='blog'>
			<div className='blog__top'>
				<div className='blog__left'>
					<h2 className='blog__title'>Блог</h2>
				</div>
				<div className='blog__right'>
					<Link
						className='blog__right-button'
						to='/'
						duration={150}
						spy={true}
						smooth={true}
						offset={-100}
					>
						<div>
							<span>Смотреть все</span>
							<AiOutlineRight />
						</div>
					</Link>
				</div>
			</div>
			<div className='blog__articles grid'>
				<article className='blog__article'>
					<div className='blog__img'>
						<img src={IMG} alt='' />
					</div>
					<div className='blog__common'>
						<div className='blog__text'>
							<h1 className='blog__text-title'>
								Профессия «Python разработчик»
							</h1>
							<p className='blog__text-description'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
								aliquam, purus sit amet luctus
							</p>
						</div>
						<div className='blog__link'>
							<Link
								to='/'
								duration={150}
								spy={true}
								smooth={true}
								offset={-100}
							>
								<div className='blog__link-button'>
									<span>Читать</span>
									<img src={ICON} alt='' />
								</div>
							</Link>
						</div>
					</div>
				</article>
				<article className='blog__article'>
					<div className='blog__img'>
						<img src={IMG} alt='' />
					</div>
					<div className='blog__common'>
						<div className='blog__text'>
							<h1 className='blog__text-title'>
								Профессия «Python разработчик»
							</h1>
							<p className='blog__text-description'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
								aliquam, purus sit amet luctus
							</p>
						</div>
						<div className='blog__link'>
							<Link
								to='/'
								duration={150}
								spy={true}
								smooth={true}
								offset={-100}
							>
								<div className='blog__link-button'>
									<span>Читать</span>
									<img src={ICON} alt='' />
								</div>
							</Link>
						</div>
					</div>
				</article>
				<article className='blog__article'>
					<div className='blog__img'>
						<img src={IMG} alt='' />
					</div>
					<div className='blog__common'>
						<div className='blog__text'>
							<h1 className='blog__text-title'>
								Профессия «Python разработчик»
							</h1>
							<p className='blog__text-description'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
								aliquam, purus sit amet luctus
							</p>
						</div>
						<div className='blog__link'>
							<Link
								to='/'
								duration={150}
								spy={true}
								smooth={true}
								offset={-100}
							>
								<div className='blog__link-button'>
									<span>Читать</span>
									<img src={ICON} alt='' />
								</div>
							</Link>
						</div>
					</div>
				</article>
				<article className='blog__article'>
					<div className='blog__img'>
						<img src={IMG} alt='' />
					</div>
					<div className='blog__common'>
						<div className='blog__text'>
							<h1 className='blog__text-title'>
								Профессия «Python разработчик»
							</h1>
							<p className='blog__text-description'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
								aliquam, purus sit amet luctus
							</p>
						</div>
						<div className='blog__link'>
							<Link
								to='/'
								duration={150}
								spy={true}
								smooth={true}
								offset={-100}
							>
								<div className='blog__link-button'>
									<span>Читать</span>
									<img src={ICON} alt='' />
								</div>
							</Link>
						</div>
					</div>
				</article>
			</div>
		</section>
	)
}

export default Blog
