interface checkScoreConditionProps{
    targetName: string;
    currScore: number;
    bestScore: number;
    setBestScore: React.Dispatch<React.SetStateAction<number>>;
    setCurrScore: React.Dispatch<React.SetStateAction<number>>;
}

let savedClicked:string[]=[];

function checkScoreCondition({targetName, })