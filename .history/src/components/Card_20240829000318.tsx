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

function Card