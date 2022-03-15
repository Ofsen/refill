export default function Navbar(props) {
	const data = [
		{
			title: 'Accueil',
			link: '/',
		},
		{
			title: 'Recharge',
			link: '/dashboard',
		},
	];

	console.log(props);

	return (
		<nav>
			<ul>
				{data.map((e, index) => (
					<li key={index}>
						<a href={e.link}>{e.title}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
