import DefaultLayout from 'hoc/Layout/DefaultLayout';

const HomePage = () => {

    return (
        <DefaultLayout title='Auth Site | Home' content='Home Page'>
            <h1 style={{color: `var(--text-color)`}}>Home Page</h1>
            <p style={{color: `var(--text-color)`}}>test</p>
            <p style={{color: `var(--text-color)`}}>test 2</p>
        </DefaultLayout>
    );
}

export default HomePage;


