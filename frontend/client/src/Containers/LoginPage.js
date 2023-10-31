import { useEffect } from 'react';
import DefaultLayout from 'hoc/Layout/DefaultLayout';
import { resetRegistered } from 'features/user';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetRegistered());
    }, []);


    return (
        <DefaultLayout title='Auth Site | Login' content='Login Page'>
            <h1>Login Page</h1>
        </DefaultLayout>
    );
}

export default LoginPage;