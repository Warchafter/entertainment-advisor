import { Sidebar, Navbar } from 'Components/index';
import { Helmet } from 'react-helmet';

import "hoc/Layout/css/DefaultLayout.css";

const DefaultLayout = ({title, content, children}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name='description' content={content}/>
            </Helmet>
            <div className='layout-lg'>
                <Sidebar />
                <div className='layout-right'>
                    <Navbar />
                    {children}
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;