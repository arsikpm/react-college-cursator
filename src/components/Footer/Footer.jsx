import React from 'react'
import { Link } from 'react-scroll'
import FC from '../../assets/images/footer/facebook.svg'
import OK from '../../assets/images/footer/ok.svg'
import SK from '../../assets/images/footer/skype.svg'
import TG from '../../assets/images/footer/telegramm.svg'
import TW from '../../assets/images/footer/twitter.svg'
import VB from '../../assets/images/footer/viber.svg'
import VK from '../../assets/images/footer/vk.svg'
import WT from '../../assets/images/footer/whatsapp.svg'
import ScrollUp from '../ScrollUp/ScrollUp'
import './footer.css'

const Footer = () => {
	return (
		<section className='footer container section' id='footer'>
			<div className='footer__top'>
				<h1>Cursator</h1>
				<div className='footer__top-logotypes'>
					<img src={TG} alt='telegramm' />
					<img src={TW} alt='twitter' />
					<img src={SK} alt='skype' />
					<img src={OK} alt='ok' />
					<img src={FC} alt='facebook' />
					<img src={VK} alt='vk' />
					<img src={WT} alt='whatsapp	' />
					<img src={VB} alt='viber' />
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
						<Link 							className='footer__middle-left-link'
							to='/'
							duration={150}
							spy={true}
							smooth={true}
							offset={-100}>
							<li>Политика конфиденциальности</li>
						</Link>
						<Link 							className='footer__middle-left-link'
							to='/'
							duration={150}
							spy={true}
							smooth={true}
							offset={-100}>
							<li>Пользовательские соглашения</li>
						</Link>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Footer
