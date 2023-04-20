import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-scroll'
import './header.css'

const Header = () => {
	return (
		<header className='header'>
			<nav className='nav container'>
				<Link className='nav__logo' to='home' smooth={true} duration={150}>
					<span>Cursator</span>
				</Link>
				<div className='nav__menu'>
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
			</nav>
		</header>
	)
}

export default Header
