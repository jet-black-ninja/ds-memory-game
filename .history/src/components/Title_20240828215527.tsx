import DSLogo from "../assets/dark-souls-logo.png"
import TCGLogo from '../assets/fire-logo.png';
import TextLogo from '../assets/text_logo.svg';
import '../styles/Header.scss';
function Title() {
    return (
        <div className = "main-title-container">
            <div className = "logo-container">
                <img id = "dark-souls-logo" src={DSLogo} alt="Dark Souls Log"/>
                <div className ="divide">X</div>
                <div className = "tcg-logo-container">
                    <a href = "https://github.com/jet-black-ninja/ds-memory-game">
                    <img id="tcg-logo" src={TCGLogo} alt="TCG cards logo"/>
                    </a>
                    <img id="text-logo" src ={TextLogo} alt = "text logo"/>
                </div>
            </div>
            <p >A Fan Made Project for Dark Souls</p>
        </div>
    );
}

export default Title;