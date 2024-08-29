import {savedClicked} from "./checkScoreCondition";
interface checkWinConditionProps{
    cardsLimit: number;
    setCurrScore: React.Dispatch<React.SetStateAction<number>>;
}

function checkWinCondition({cardsLimit, setCurrScore}: checkWinConditionProps) {
    if(savedClicked === cardsLimit){
        setCurrScore(0);
        return "win"
    }
}