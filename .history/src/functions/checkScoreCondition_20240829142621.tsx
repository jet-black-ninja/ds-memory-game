interface checkScoreConditionProps{
    targetName: string;
    currScore: number;
    bestScore: number;
    setBestScore: React.Dispatch<React.SetStateAction<number>>;
    setCurrScore: React.Dispatch<React.SetStateAction<number>>;
}

let savedClicked:string[]=[];

function checkScoreCondition({targetName, currScore, bestScore, setBestScore, setCurrScore}:checkScoreConditionProps){
    //lose if the card clicked is already clicked previously
    if(savedClicked.includes(targetName)){
        setCurrScore(0);
        savedClicked = [];
        return "lose";
    } else {
        const newScore = currScore++;
        const newBestScore = 
    }
}