import './style.css';

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

export default function Navbar() {
	return (
		<nav>
			<h2 className='logo'>
				<span>RE</span>FILL
			</h2>
			<ul>
				{data.map((e, index) => (
					<li className={window.location.pathname === e.link && 'flashy'} key={index}>
						<a href={e.link}>{e.title}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
