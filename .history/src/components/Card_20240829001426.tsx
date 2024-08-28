import {useContext} from "react";
import {charImageMap} from "../functions/filterImage";
import {gameContextType, gameContext} from "./pages/GamePage";
import {pageContextType , pageContext} from "../App";
import {checkScoreCondition} from "../functions/checkScoreCondition";
import {checkWinCondition} from "../functions/checkWinCondition";
import "../styles/Card.scss";
import cardBack from "../assets/bon-fire.jpg";
import Tilt from "react-parallax-tilt";

interface CardProps{
    charName : string;
}

//remove - and capitalize
function normalizeName(charName :string){
    charName = charName.replace(/-/g," ");
    let charNameList = charName.split("");
    charNameList = charNameList.map((name)=> name.charAt(0).toUpperCase() + name.slice(1));
    charName = charNameList.join(" ");
    return charName;
}

function Card({charName}:CardProps){
    const { currCharList, isFlipped, handleCardClick, setCardsCounter } = useContext<gameContextType>(gameContext);
	const { setWinActive, setLoseActive, currScore, bestScore, setBestScore, setCurrScore } = useContext<pageContextType>(pageContext);
	const imageSrc = charImageMap[charName]; // Finds the img src from the hashmap in filterImage.ts
	const NormalizeName = normalizeName(charName);
    
    const handleClick = (e: React.MouseEvent<HTMLElement>) =>{
        if(!isFlipped){
            const targetName = e.currentTarget.getAttribute("id") || "";
            const cardsLimit = currCharList.length;
            let pageStatus = checkScoreCondition({targetName, currScore, bestScore, setBestScore, setCurrScore});
            if(checkWinCondition({cardsLimit, setCurrScore})==="win"){
                pageStatus = "win";
            }
            setPageStatus(pageStatus);
            setCardsCounter((counter:number) => counter+1);
            handleCardClick(pageStatus);
        }
    };

    const setPageStatus = (pageStatus:string) => {
        if(pageStatus ==="win"){
            setWinActive(true);
        }else if(pageStatus ==="lose"){
            setLoseActive(true);
        }
    };

    return (
        <>
        {isFlipped ? (
            <Tilt glareEnable={false} glareMaxOpacity= {0}>
                <div id={charName} onClick={handleClick} className="scene">
                    <div className ={isFlipped ? "card flip-active": "card"}>
                        <div className="card-face card-face-front">
                            <div className =""    
                        </div> 
                    </div>
                </div>
            </Tilt>
        ):(

        )}
        </>
    )
}    