import { useState } from 'react';
import '../Styles/Navigation.css'

const Navigation = ({ imageUrl }) => {
	const [open, setOpen] = useState(false)
	const [dropdownClass, setDropdownClass] = useState('')

	function handleOpen() {
		const body = document.querySelector('body')

		if (open) {
			setDropdownClass('open')
			body.classList.add('no-scroll')
		} else {
			setDropdownClass('')
			body.classList.remove('no-scroll')
		}

		setOpen(prev => !prev)
	}

	return (
	<div className="header">
		<div className="header__nav container">
			<div className="nav__logo">
				<img src={imageUrl.concat('logo.svg')} alt="logo" />
			</div>

			<div onClick={handleOpen} className="menu__hamburger">
				<img src={imageUrl.concat('icon-hamburger.svg')} alt="menu" />
			</div>

			<div className={`menu__dropdown-wrapper ${dropdownClass}`}>
				<ul className="menu__dropdown">
					<li><a href="#">Home</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Contact</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Careers</a></li>
				</ul>
			</div>

			<a href="#" className="button">Request Invite</a>
		</div>
	</div>
	)
}

export default Navigation;