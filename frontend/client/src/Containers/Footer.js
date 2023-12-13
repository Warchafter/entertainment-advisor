import "./css/Footer.css";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-row-section">
                <div>
                    <img className="image-logo" src="https://miro.medium.com/v2/resize:fit:1196/1*KZHfluSxMl5RMy2C9SLaEA.png" alt="react logo"></img>
                </div>
            </div>
            <div className="footer-row-section">
                <lu className="footer-info-row">
                    <li className="footer-li">Kevin Arriaga Solis</li>
                    <li className="footer-li">Github</li>
                    <li className="footer-li">LinkedIn</li>
                    <li className="footer-li">Portfolio</li>
                </lu>
            </div>
        </div>
    )
}

export default Footer;