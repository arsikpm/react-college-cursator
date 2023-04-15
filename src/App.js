import React from 'react'
import './App.css'
import Blog from './components/Blog/Blog'
import Courses from './components/Courses/Courses'
import Email from './components/Email/Email'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home'
import TopCourses from './components/TopCourses/TopCourses'
import TopSchools from './components/TopSchools/TopSchools'

const App = () => {
	return (
		<>
			<Header />
			<main className='main'>
				<Home />
				<Courses />
				<TopSchools />
				<TopCourses />
				<Email />
				<Blog />
			</main>
			<Footer />
		</>
	)
}

export default App
