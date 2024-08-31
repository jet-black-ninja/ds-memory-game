interface checkScoreConditionProps {
    targetName: string;
    currScore: number;
    bestScore: number;
    setBestScore: React.Dispatch<React.SetStateAction<number>>;
    setCurrScore: React.Dispatch<React.SetStateAction<number>>;
}
declare let savedClicked: string[];
declare function checkScoreCondition({ targetName, currScore, bestScore, setBestScore, setCurrScore }: checkScoreConditionProps): "lose" | "Continue";
export { checkScoreCondition, savedClicked };
