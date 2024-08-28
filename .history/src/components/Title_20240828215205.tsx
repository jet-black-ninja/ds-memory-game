import DSLogo from "../assets/dark-souls-logo.png"
import TCG from '../assets/fire-logo.png';
import TextLogo from '../assets/text_logo.svg';
import '../styles/Header.scss';
function Title() {
    return (
        <div className = "main-title-container">
            <div className = "logo-container">
                <img id = "dark-souls-logo" src={DSLogo} alt="Dark Souls Log"/>
                
            </div>
        </div>
    )
}