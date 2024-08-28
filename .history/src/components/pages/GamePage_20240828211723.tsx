import {useState, useEffect, createContext,useContext} from "react";
import { pageContext } from "../../App";
import Scoreboard from '../Scoreboard.tsx';
import CardCounter from '../CardCounter.tsx';
import CardListUI from '../../components/CardListUI.tsx';
import Title from '../Title.tsx';
import selectCardsAmount from '../../functions/selectCardsAmount.tsx';
import '../../styles/GamePlatform.scss';
import backgroundVideo from '../../assets/transitions/firelink2.gif';
import backgroundImage from '../../assets/transitions/firelink2.png';
import shuffle from '../../functions/shuffle';
import {useSoundContext} from '../../contexts/SoundContext.tsx';

export interface gameContextType{
    currCharList: string[];
    cardsCounter: number;
    isFlipped: boolean;
    shuffleActive: boolean;
    handleCardClick : (pageStatus: string)=> void;
    setCurrCharList : React.Dispatch<React.SetStateAction<string[]>>;
    setCardsCounter : React.Dispatch<React.SetStateAction<number>>;
}

export const gameContext = createContext<gameContextType>({} as gameContextType);

export default function GamePage(){
    const [currCharList, setCurrCharList ] = useState<string[]>([]);
    const [cardsCounter, setCardsCounter]  = useState<number>(0);
    const [showCardsNumber, setShowCardsNumber] = useState<number>(0);
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const [shuffleActive, setShuffleActive] = useState<boolean>(false);
    const {charList , selectedLevel} = useContext(pageContext);
    const {currSoundActive, playFlipCard, stopFlipCard} = useSoundContext();


    useEffect(() => {
        const {selectedCards, displayCards} = selectCardsAmount({charList, selectedLevel});
        setCurrCharList(selectedCards);
        setShowCardsNumber(displayCards);
    },[charList, selectedLevel]);

    const flipCardSound = () => {
        if(currSoundActive){
            stopFlipCard();
            playFlipCard();
        }else{
            stopFlipCard();
        }
    }

    const handleCardClick = (pageStatus:string) => {
        //prevent multiple clicks when flipping cards
        if(isFlipped || pageStatus ==="win" || pageStatus==="lose"){
            return;
        }
        setShuffleActive(true);
        setIsFlipped(true);
        flipCardSound();
        //Allow card shuffles to happen between intermission of card front and back flip 
        setCurrCharList(shuffle({charList:currCharList}));
        
    }

}
