import { useContext } from "react";
import { pageContext } from "../../App";
import Title from "../Title";
import '../../styles/DifficultyPage.scss';
import SolairCard from '../../assets/solair-of-astora.jpg'
import backgroundVideo from '../../assets/transitions/firelink2.gif'
import backgroundPoster from '../../assets/transitions/firelink2.png';

function DifficultyPage(){
    const {setSelectedLevel, setDifficultyActive} = useContext(pageContext);
    const handleClick = (e: React.MouseEvent) => {
        const levelSelected = e.currentTarget.getAttribute("id")||"";
        setDifficultyActive(false);
        setSelectedLevel(levelSelected);
    };

    return (
        <div className = "main-difficulty-page-container">
            <video muted autoPlay loop playsInline id="backgroundVideo" poster={backgroundPoster}>
                <source src ={backgroundVideo} type="gif"/>
            </video>
            <Title/>
            <div className ="description-container">
                <img className="solair" src={SolairCard} alt="solair card"/>
                <div >
                    <p>
                        Greetings Stranger ! We have been summoned in this bizarre world. There is one way to return to Lordran.
                        <br/>
                        Pick the entities of our world nor more than once.
                        <br/>
                        <br/>
                        Im counting on you for this one.
                    </p>
                </div>
            </div>
            <div className="difficulty-opt-container">
                <button id="easy" onClick={handleClick}>
                    Elden Ring
                </button>
                <button id="medium" onClick={handleClick}>
                    DARK SOULS III
                </button>
                <button id="insane" onClick={handleClick}>
                    DARK SOULS
                </button>
            </div>
        </div>
    );
}
export default DifficultyPage;