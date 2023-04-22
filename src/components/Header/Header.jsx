import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-scroll'
import LINES from '../../assets/images/header/lines.svg'
import './header.css'

const Header = () => {
	const [Toggle, showMenu] = useState(false)
	return (
		<header className='header'>
			<nav className='nav container'>
				<Link className='nav__logo' to='home' smooth={true} duration={150}>
					<span>Cursator</span>
				</Link>
				<div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
					<ul className='nav__list grid'>
						<li className='nav__item'>
							<Link
								to='home'
								duration={150}
								spy={true}
								smooth={true}
								offset={-100}
								className='nav__link'
							>
								<span>Все курсы</span>
								<FiChevronDown className='nav__icon' />
							</Link>
						</li>
						<li className='nav__item'>
							<Link
								to='home'
								duration={150}
								spy={true}
								smooth={true}
								offset={-100}
								className='nav__link'
							>
								<span>Тест на профессию</span>
							</Link>
						</li>
						<li className='nav__item'>
							<Link
								to='home'
								duration={150}
								spy={true}
								smooth={true}
								offset={-100}
								className='nav__link'
							>
								<span>Акции</span>
							</Link>
						</li>
						<li className='nav__item'>
							<Link
								to='home'
								duration={150}
								spy={true}
								smooth={true}
								offset={-100}
								className='nav__link'
							>
								<span>Отзывы</span>
							</Link>
						</li>
					</ul>
				</div>
				<div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
					<img className='nav__toggle' src={LINES} alt='lines' />
				</div>
			</nav>
		</header>
	)
}

export default Header
