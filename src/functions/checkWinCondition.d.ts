interface checkWinConditionProps {
    cardsLimit: number;
    setCurrScore: React.Dispatch<React.SetStateAction<number>>;
}
declare function checkWinCondition({ cardsLimit, setCurrScore }: checkWinConditionProps): "win" | "continue";
export { checkWinCondition };
