import "./css/PlatformShowcaseV2.css";
import ReactLogo from '../assets/images/logo-react-icon.png';
import PythonLogo from '../assets/images/python-logo.png';
import JavascriptLogo from '../assets/images/JavaScript-Logo.png';
import DockerLogo from '../assets/images/docker-logo.png';
import ReduxLogo from '../assets/images/react-redux-logo.png'
import PostgresLogo from '../assets/images/PostgreSQL-logo.png';
import MaterialUILogo from '../assets/images/material-ui-logo.png';
import DjangoLogo from '../assets/images/django-logo.jpg';

import {platformList} from '../shared/platformList.js';


const PlatformShowcase = () => {
    return (
        <div className='container-platforms-v2'>
            {platformList.map((value, index) => {
                {/* console.log("value: ",value);
                console.log("index: ",index); */}
                return(
                    <>
                        <div className="platform-card-wrapper">
                            <img className="platform-logo" src={value.platformImageUrl} alt="logo"></img>
                            <p className="platform-description">{value.description}</p>
                        </div>
                    </>
                )
            })}
            {/* <div className='container-1-v2 left-v2'>
                <div className='container-1-child-v2'>
                    <img className='skill-logo-v2' src={JavascriptLogo} alt='js-logo'></img>
                    <p>test</p>
                </div>
            </div>

            <div className='container-1-v2 right-v2'>
                <img className='skill-logo' src={PythonLogo} alt='python-logo'></img>
            </div>

            <div className='container-1-v2 left-v2'>
                <img className='skill-logo' src={ReactLogo} alt='react-logo'></img>
            </div>

            <div className='container-1 right-v2'>
                <img className='skill-logo' src={DockerLogo} alt='docker-logo'></img>
            </div>

            <div className='container-1 left'>
                <img className='skill-logo' src={ReduxLogo} alt='redux-logo'></img>
            </div>

            <div className='container-1 right'>
                    <img className='skill-logo' src={PostgresLogo} alt='postgres-logo'></img>
            </div>

            <div className='container-1 left'>
                <img className='skill-logo' src={MaterialUILogo} alt='material-ui-logo'></img>
            </div>

            <div className='container-1 right'>
                <img className='skill-logo' src={DjangoLogo} alt='django-logo'></img>
            </div> */}
        </div>
    )
};

export default PlatformShowcase;