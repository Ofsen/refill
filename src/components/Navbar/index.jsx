import { Link, useLocation } from 'react-router-dom';
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
	const location = useLocation();
	return (
		<nav>
			<h2 className='logo'>
				<Link to='/'>
					<span>RE</span>FILL
				</Link>
			</h2>
			<ul>
				{data.map((e, index) => {
					return (
						<li className={location.pathname === e.link ? 'flashy' : ''} key={index}>
							<Link to={e.link}>{e.title}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
