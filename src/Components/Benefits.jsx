import '../Styles/Benefits.css'

const Benefits = ({ imageUrl }) => {
	return (
		<section className="benefits">
			<div className="benefits__wrapper container">
				<div className="benefits__header">
					<h2>Why choose Easybank?</h2>
					<p>
					We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
					</p>
				</div>
				<div className="grid">
					<div className="features__item">
						<div className="item__icon">
							<img src={imageUrl.concat('icon-online.svg')} alt="" />
						</div>
						<h3 className="item__name">Online Banking</h3>
						<p className="item__subtext">
						Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
						</p>
					</div>
					<div className="features__item">
						<div className="item__icon">
							<img src={imageUrl.concat('icon-budgeting.svg')} alt="" />
						</div>
						<h3 className="item__name">Simple Budgeting</h3>
						<p className="item__subtext">
						See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.
						</p>
					</div>
					<div className="features__item">
						<div className="item__icon">
							<img src={imageUrl.concat('icon-onboarding.svg')} alt="" />
						</div>
						<h3 className="item__name">Fast Onboarding</h3>
						<p className="item__subtext">
						We don’t do branches. Open your account in minutes online and start taking control of your finances right away.
						</p>
					</div>
					<div className="features__item">
						<div className="item__icon">
							<img src={imageUrl.concat('icon-api.svg')} alt="" />
						</div>
						<h3 className="item__name">Open API</h3>
						<p className="item__subtext">
						Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Benefits;