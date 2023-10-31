import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DefaultLayout from 'hoc/Layout/DefaultLayout';
import { resetRegistered } from 'features/user';
import { Loader } from 'Components/Loader';

const LoginPage = () => {
    const dispatch = useDispatch();


	const { loading } = useSelector(state => state.user);

	const [formData, setFormData] = useState({
        first_name: '',
		last_name: '',
		email: '',
		password: '',
	});

    useEffect(() => {
        dispatch(resetRegistered());
    }, []);

	const { email, password } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();

		// dispatch(register({ email, password }));
	};

    return (
        <DefaultLayout title='Auth Site | Login' content='Login Page'>
            <h1>Login into your Account</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        onChange={onChange}
                        value={email}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        onChange={onChange}
                        value={password}
                        required
                    />
                </div>
                {loading ? <Loader />  : <button>Login</button>}
            </form>
        </DefaultLayout>
    );
}

export default LoginPage;