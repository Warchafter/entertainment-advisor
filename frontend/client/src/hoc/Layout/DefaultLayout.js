import { Sidebar, Navbar } from 'Components/index';

const DefaultLayout = ({children}) => {
    return (
        <>
            <Sidebar />
            <Navbar />
            {children}
        </>
    );
}

export default DefaultLayout;