import { useSelector } from 'react-redux';
import DefaultLayout from 'hoc/Layout/DefaultLayout';
import { Loader } from 'Components/Loader';
import { Navigate } from 'react-router-dom';

const DashboardPage = () => {
    const { isAuthenticated, user, loading } = useSelector(state => state.user);

    if (isAuthenticated && loading && user === null) {
        return <Navigate to='/login' />
    }

    return (
        <DefaultLayout title='Auth Site | Dashboard' content='Dashboard Page'>
            {loading || user === null
                ?
                    <Loader />
                :
                <>
                    <h1>Dashboard Page - this is a dashboard</h1>
                    <ul>
                        <li>First Name: {user.first_name}</li>
                        <li>Last Name: {user.last_name}</li>
                        <li>Email: {user.email}</li>
                    </ul>
                </>
            }
        </DefaultLayout>
    );
}

export default DashboardPage;