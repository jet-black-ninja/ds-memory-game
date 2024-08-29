import {savedClicked} from "./checkScoreCondition";
interface checkWinConditionProps{
    cardsLimit: number;
    setCurrScore: React.Dispatch<React.SetStateAction<number>>;
}

function checkWinCondition({cardsLimit, setCurrScore})