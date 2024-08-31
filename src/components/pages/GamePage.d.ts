import '../../styles/GamePlatform.scss';
export interface gameContextType {
    currCharList: string[];
    cardsCounter: number;
    isFlipped: boolean;
    shuffleActive: boolean;
    handleCardClick: (pageStatus: string) => void;
    setCurrCharList: React.Dispatch<React.SetStateAction<string[]>>;
    setCardsCounter: React.Dispatch<React.SetStateAction<number>>;
}
export declare const gameContext: import("react").Context<gameContextType>;
export default function GamePage(): import("react/jsx-runtime").JSX.Element;
