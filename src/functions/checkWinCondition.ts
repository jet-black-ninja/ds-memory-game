import {savedClicked} from "./checkScoreCondition.ts";
interface checkWinConditionProps{
    cardsLimit: number;
    setCurrScore: React.Dispatch<React.SetStateAction<number>>;
}

function checkWinCondition({cardsLimit, setCurrScore}: checkWinConditionProps) {
    if(savedClicked.length === cardsLimit){
        setCurrScore(0);
        return "win";
    }
    return "continue";
}

export {checkWinCondition};