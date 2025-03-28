// src/App.js
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'

// Импортируем изображения
import aboutUsImage from './images/about-us.jpg'
import servicesImage from './images/services.jpg'
import advantagesImage from './images/advantages.jpg'
import reviewsImage from './images/reviews.jpg'
import plasticWindowsImage from './images/plastic-windows.jpg'
import woodenWindowsImage from './images/wooden-windows.jpg'
import aluminumWindowsImage from './images/aluminum-windows.jpg'
import glassPacketsImage from './images/glass-packets.jpg'
import blindsImage from './images/blinds.jpg'
import mosquitoNetsImage from './images/mosquito-nets.jpg'
import contactsImage from './images/contacts.jpg'

const Home = () => (
	<div>
		<h2>Добро пожаловать на сайт ремонта окон в Москве!</h2>
		<p>
			Мы предлагаем лучшие услуги по ремонту окон. Свяжитесь с нами для
			получения консультации.
		</p>

		<section className="about-us">
			<h3>О нас</h3>
			<img src={aboutUsImage} alt="О нас" className="responsive-image" />
			<p>
				Наша компания занимается ремонтом окон уже более 10 лет. Мы предлагаем
				высококачественные услуги по установке и ремонту пластиковых, деревянных
				и алюминиевых окон. Наши мастера имеют богатый опыт и используют только
				проверенные материалы.
			</p>
		</section>

		<section className="services">
			<h3>Наши услуги</h3>
			<img src={servicesImage} alt="Наши услуги" className="responsive-image" />
			<ul>
				<li>Установка пластиковых окон</li>
				<li>Установка деревянных окон</li>
				<li>Установка алюминиевых окон</li>
				<li>Ремонт стеклопакетов</li>
				<li>Установка жалюзи</li>
				<li>Установка москитных сеток</li>
			</ul>
		</section>

		<section className="advantages">
			<h3>Преимущества</h3>
			<img
				src={advantagesImage}
				alt="Преимущества"
				className="responsive-image"
			/>
			<ul>
				<li>Высокое качество материалов</li>
				<li>Гарантия на все работы</li>
				<li>Быстрый монтаж</li>
				<li>Индивидуальный подход к каждому клиенту</li>
				<li>Конкурентные цены</li>
			</ul>
		</section>

		<section className="reviews">
			<h3>Отзывы клиентов</h3>
			<img
				src={reviewsImage}
				alt="Отзывы клиентов"
				className="responsive-image"
			/>
			<blockquote>
				<p>
					"Спасибо за отличную работу! Окна установили быстро и качественно.
					Рекомендую!"
				</p>
				<footer>- Иван Иванов</footer>
			</blockquote>
			<blockquote>
				<p>
					"Профессионалы своего дела. Все сделали в срок и по высокому уровню.
					Будем обращаться еще!"
				</p>
				<footer>- Мария Петрова</footer>
			</blockquote>
		</section>
	</div>
)

const PlasticWindows = () => (
	<div>
		<h2>Пластиковые окна</h2>
		<img
			src={plasticWindowsImage}
			alt="Пластиковые окна"
			className="responsive-image"
		/>
		<p>
			Пластиковые окна — это современное и надежное решение для вашего дома. Они
			обладают высокой теплоизоляцией и звукоизоляцией.
		</p>
	</div>
)

const WoodenWindows = () => (
	<div>
		<h2>Деревянные окна</h2>
		<img
			src={woodenWindowsImage}
			alt="Деревянные окна"
			className="responsive-image"
		/>
		<p>
			Деревянные окна придают вашему дому уют и стиль. Они идеально подходят для
			классического интерьера.
		</p>
	</div>
)

const AluminumWindows = () => (
	<div>
		<h2>Алюминиевые окна</h2>
		<img
			src={aluminumWindowsImage}
			alt="Алюминиевые окна"
			className="responsive-image"
		/>
		<p>
			Алюминиевые окна — это долговечное и экологичное решение. Они легко
			ухаживать и не требуют специального ухода.
		</p>
	</div>
)

const GlassPackets = () => (
	<div>
		<h2>Стеклопакеты</h2>
		<img
			src={glassPacketsImage}
			alt="Стеклопакеты"
			className="responsive-image"
		/>
		<p>
			Стеклопакеты обеспечивают отличную теплоизоляцию и звукоизоляцию. Они
			идеально подходят для современных домов.
		</p>
	</div>
)

const Blinds = () => (
	<div>
		<h2>Жалюзи</h2>
		<img src={blindsImage} alt="Жалюзи" className="responsive-image" />
		<p>
			Жалюзи — это практичное решение для управления светом и
			кондиционированием. Они доступны в различных дизайнах и материалах.
		</p>
	</div>
)

const MosquitoNets = () => (
	<div>
		<h2>Москитные сетки</h2>
		<img
			src={mosquitoNetsImage}
			alt="Москитные сетки"
			className="responsive-image"
		/>
		<p>
			Москитные сетки защищают вас от насекомых и обеспечивают чистый воздух в
			вашем доме.
		</p>
	</div>
)

const Contacts = () => (
	<div>
		<h2>Контакты</h2>
		<img src={contactsImage} alt="Контакты" className="responsive-image" />
		<p>Свяжитесь с нами по телефону: +7 (495) 123-45-67</p>
		<p>Или напишите нам на email: info@windowsrepair.ru</p>
	</div>
)

const App = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<Link to="/" className="header-link">
						<h1>Ремонт окон в Москве</h1>
					</Link>
					<button className="menu-toggle" onClick={toggleMenu}>
						☰
					</button>
					<nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
						<ul>
							<li>
								<Link to="/" onClick={toggleMenu}>
									Главная
								</Link>
							</li>
							<li>
								<Link to="/plastic-windows" onClick={toggleMenu}>
									Пластиковые окна
								</Link>
							</li>
							<li>
								<Link to="/wooden-windows" onClick={toggleMenu}>
									Деревянные окна
								</Link>
							</li>
							<li>
								<Link to="/aluminum-windows" onClick={toggleMenu}>
									Алюминиевые окна
								</Link>
							</li>
							<li>
								<Link to="/glass-packets" onClick={toggleMenu}>
									Стеклопакеты
								</Link>
							</li>
							<li>
								<Link to="/blinds" onClick={toggleMenu}>
									Жалюзи
								</Link>
							</li>
							<li>
								<Link to="/mosquito-nets" onClick={toggleMenu}>
									Москитные сетки
								</Link>
							</li>
							<li>
								<Link to="/contacts" onClick={toggleMenu}>
									Контакты
								</Link>
							</li>
						</ul>
					</nav>
				</header>
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/plastic-windows" element={<PlasticWindows />} />
						<Route path="/wooden-windows" element={<WoodenWindows />} />
						<Route path="/aluminum-windows" element={<AluminumWindows />} />
						<Route path="/glass-packets" element={<GlassPackets />} />
						<Route path="/blinds" element={<Blinds />} />
						<Route path="/mosquito-nets" element={<MosquitoNets />} />
						<Route path="/contacts" element={<Contacts />} />
					</Routes>
				</main>
				<footer>
					<p>&copy; 2025 Ремонт окон в Москве</p>
				</footer>
			</div>
		</Router>
	)
}

export default App
