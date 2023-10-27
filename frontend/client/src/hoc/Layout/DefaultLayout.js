import { Sidebar, Navbar } from 'Components/index';

const DefaultLayout = (props) => {
    return (
        <div>
            <Sidebar />
            <Navbar />
        </div>
    );
}

export default DefaultLayout;