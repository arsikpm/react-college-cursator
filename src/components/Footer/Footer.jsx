import React from 'react'
import { Link } from 'react-scroll'
import OK from '../../assets/images/footer/ok.svg'
import TG from '../../assets/images/footer/telegramm.svg'
import VK from '../../assets/images/footer/vk.svg'
import ScrollUp from '../ScrollUp/ScrollUp'
import './footer.css'

const Footer = () => {
	return (
		<section className='footer container section' id='footer'>
			<div className='footer__top'>
				<h1>Cursator</h1>
				<div className='footer__top-logotypes'>
					<img src={TG} alt='telegramm' />
					<img src={OK} alt='ok' />
					<img src={VK} alt='vk' />
				</div>
			</div>
			<div className='footer__middle'>
				<div className='footer__middle-left'>
					<ul>
						<Link
							className='footer__middle-left-link'
							to='/'
							duration={150}
							spy={true}
							smooth={true}
							offset={-100}
						>
							<li>О нас</li>
						</Link>
						<Link
							className='footer__middle-left-link'
							to='/'
							duration={150}
							spy={true}
							smooth={true}
							offset={-100}
						>
							<li>Контакты</li>
						</Link>
						<Link
							className='footer__middle-left-link'
							to='/'
							duration={150}
							spy={true}
							smooth={true}
							offset={-100}
						>
							<li>Отзывы о школах</li>
						</Link>
					</ul>
				</div>
				<div className='footer__middle-button'>
					<div>
						<span>В начало</span>
						<ScrollUp />
					</div>
				</div>
			</div>
			<div className='footer__bottom'>
				<div className='footer__bottom-left'>
					<span>&#169; 2021 cursator.online</span>
				</div>
				<div className='footer__bottom-right'>
					<ul>
						<Link
							className='footer__middle-left-link'
							to='/'
							duration={150}
							spy={true}
							smooth={true}
							offset={-100}
						>
							<li>Политика конфиденциальности</li>
						</Link>
						<Link
							className='footer__middle-left-link'
							to='/'
							duration={150}
							spy={true}
							smooth={true}
							offset={-100}
						>
							<li>Пользовательские соглашения</li>
						</Link>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Footer
