import React from 'react'
import IMG from '../../assets/images/email/assets.svg'
import './email.css'

const Email = () => {
	return (
		<section className='email container section' id='email'>
			<div className='email__wrapper'>
				<div className='email__inner'>
					<div className='email__left grid'>
						<div className='email__left-text'>
							<div>Получайте все новости</div>
							<h1>Подпишитесь на email рассылку</h1>
						</div>
						<div className='email__subscribe'>
							<input type='email' placeholder='Ваш email' />
							<button>Подписаться</button>
						</div>
					</div>
					<div className='email__right'>
						<img src={IMG} alt='assets' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Email
