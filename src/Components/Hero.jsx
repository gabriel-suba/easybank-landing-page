import '../Styles/Hero.css'

const Hero = () => {
	return (
	<section className="hero">
		<div className="hero__wrapper container--md">
			<div className="hero__image"></div>
			<div className="hero__text container">
				<h1>Next generation digital banking</h1>
				<p>
					Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
				</p>
				<a href="#" className="button">Request Invite</a>
			</div>
		</div>
	</section>
	)
}

export default Hero;