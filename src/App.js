// src/App.js
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'

const Home = () => (
	<div>
		<h2>Добро пожаловать на сайт ремонта окон в Москве!</h2>
		<p>
			Мы предлагаем лучшие услуги по ремонту окон. Свяжитесь с нами для
			получения консультации.
		</p>
	</div>
)

const PlasticWindows = () => (
	<div>
		<h2>Пластиковые окна</h2>
		<p>
			Пластиковые окна — это современное и надежное решение для вашего дома. Они
			обладают высокой теплоизоляцией и звукоизоляцией.
		</p>
		<img src="" alt="Пластиковые окна" className="responsive-image" />
	</div>
)

const WoodenWindows = () => (
	<div>
		<h2>Деревянные окна</h2>
		<p>
			Деревянные окна придают вашему дому уют и стиль. Они идеально подходят для
			классического интерьера.
		</p>
		<img src="" alt="Деревянные окна" className="responsive-image" />
	</div>
)

const AluminumWindows = () => (
	<div>
		<h2>Алюминиевые окна</h2>
		<p>
			Алюминиевые окна — это долговечное и экологичное решение. Они легко
			ухаживать и не требуют специального ухода.
		</p>
		<img src="" alt="Алюминиевые окна" className="responsive-image" />
	</div>
)

const GlassPackets = () => (
	<div>
		<h2>Стеклопакеты</h2>
		<p>
			Стеклопакеты обеспечивают отличную теплоизоляцию и звукоизоляцию. Они
			идеально подходят для современных домов.
		</p>
		<img src="" alt="Стеклопакеты" className="responsive-image" />
	</div>
)

const Blinds = () => (
	<div>
		<h2>Жалюзи</h2>
		<p>
			Жалюзи — это практичное решение для управления светом и
			кондиционированием. Они доступны в различных дизайнах и материалах.
		</p>
		<img src="" alt="Жалюзи" className="responsive-image" />
	</div>
)

const MosquitoNets = () => (
	<div>
		<h2>Москитные сетки</h2>
		<p>
			Москитные сетки защищают вас от насекомых и обеспечивают чистый воздух в
			вашем доме.
		</p>
		<img src="" alt="Москитные сетки" className="responsive-image" />
	</div>
)

const Contacts = () => (
	<div>
		<h2>Контакты</h2>
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
					<h1>Ремонт окон в Москве</h1>
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
					<p>&copy; 2023 Ремонт окон в Москве</p>
				</footer>
			</div>
		</Router>
	)
}

export default App
