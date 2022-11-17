import '../Styles/Articles.css'

const Articles = ({ imageUrl }) => {
	const articles = [
		{
			img: imageUrl.concat('image-currency.jpg'),
			author: 'By Claire Robinson',
			headline: 'Receive money in any currency with no fees',
			text: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
		},
		{
			img: imageUrl.concat('image-restaurant.jpg'),
			author: 'By Wilson Hutton',
			headline: 'Treat yourself without worrying about money',
			text: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
		},
		{
			img: imageUrl.concat('image-plane.jpg'),
			author: 'By Wilson Hutton',
			headline: 'Take your Easybank card wherever you go',
			text: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
		},
		{
			img: imageUrl.concat('image-confetti.jpg'),
			author: 'By Claire Robinson',
			headline: 'Our invite-only Beta accounts are now live!',
			text: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
		},
	]

	return (
		<section className="articles">
			<div className="articles__wrapper container">
				<h2 className="articles__header">Latest Articles</h2>
				<div className="grid">
					{articles.map(article => (
					<div className="article">
						<div className="article__img"><img src={article.img} alt="an image of bills" /></div>
						<div className="article__details">
							<div className="details__author">{article.author}</div>
							<h4 className="details__headline">{article.headline}</h4>
							<p className="details__paragraph">{article.text}</p>
						</div>
					</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Articles;