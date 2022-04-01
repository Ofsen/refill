import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from './accessToken';

export const withAuth = (Component) => {
	const Auth = (props) => {
		const navigate = useNavigate();

		useEffect(() => {
			const accessToken = getAccessToken();
			if (accessToken.length < 1) {
				return navigate('/', { replace: true });
			}
		}, [navigate]);

		return <Component {...props} />;
	};

	return Auth;
};

export default withAuth;
