import './styles/App.scss';
export interface pageContextType {
    charList: string[];
    currScore: number;
    bestScore: number;
    selectedLevel: string;
    winActive: boolean;
    loseActive: boolean;
    setCharList: React.Dispatch<React.SetStateAction<string[]>>;
    setWinActive: React.Dispatch<React.SetStateAction<boolean>>;
    setLoseActive: React.Dispatch<React.SetStateAction<boolean>>;
    setDifficultyActive: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrScore: React.Dispatch<React.SetStateAction<number>>;
    setBestScore: React.Dispatch<React.SetStateAction<number>>;
    setSelectedLevel: React.Dispatch<React.SetStateAction<string>>;
}
export declare const pageContext: import("react").Context<pageContextType>;
declare function App(): import("react/jsx-runtime").JSX.Element;
export default App;
