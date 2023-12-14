import FloatingNavbar from "Components/FloatingNavbar";
import HeroHeader from "Containers/HeroHeader";
import Footer from "Containers/Footer";


const LandingPage = () => {
    return (
        <div className="page-container">
            <FloatingNavbar />
            <div className="content-wrapper">
                <HeroHeader />
                <HeroHeader />
            </div>
            <div className="footer-position">
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage