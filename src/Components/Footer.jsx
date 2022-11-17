import '../Styles/Footer.css'

const Footer = ({ imageUrl }) => {
	return (
		<footer className="footer">
			<div className="footer__wrapper container">
				<a href="#" className="footer__logo"><img src={imageUrl.concat('logo-footer.svg')} alt="logo" /></a>
				<div className="footer__socials">
					<a href="#"><img src={imageUrl.concat('icon-facebook.svg')} alt="facebook" /></a>
					<a href="#"><img src={imageUrl.concat('icon-youtube.svg')} alt="youtube" /></a>
					<a href="#"><img src={imageUrl.concat('icon-twitter.svg')} alt="twitter" /></a>
					<a href="#"><img src={imageUrl.concat('icon-pinterest.svg')} alt="pinterest" /></a>
					<a href="#"><img src={imageUrl.concat('icon-instagram.svg')} alt="instagram" /></a>					
				</div>
				<ul className="footer__links col-1">
					<li><a href="#">About Us</a></li>
					<li><a href="#">Contact</a></li>
					<li><a href="#">Blog</a></li>
				</ul>
				<ul className="footer__links col-2">
					<li><a href="#">Careers</a></li>
					<li><a href="#">Support</a></li>
					<li><a href="#">Privacy Policy</a></li>
				</ul>
				<div className="footer__end">
					<a href="#" className="button">Request Invite</a>
					<div className="footer__copyright">&copy; Easybank. All Rights Reserved</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;