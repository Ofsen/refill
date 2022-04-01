import './style.css';

export default function index() {
	return (
		<div className='container home'>
			<div className='centerStuff'>
				<h1>
					Recharge de comptes <span className='pay'>pay</span>
					<span className='sera'>sera</span> et/ou <span className='wise'>wise</span> EN toute sécurité!
				</h1>
				<button className='refillButton' onClick={() => console.log('hello')}>
					<p>JE Recharge</p>
					<h2>
						<span className='pay'>pay</span>
						<span className='sera'>sera</span> / <span className='wise'>wise</span>
					</h2>
				</button>
			</div>
			<div className='footerStuff'>
				Appelez le <a href='tel:+213542151469'>+213 542 15 14 69</a> pour plus d’informations
			</div>
		</div>
	);
}
