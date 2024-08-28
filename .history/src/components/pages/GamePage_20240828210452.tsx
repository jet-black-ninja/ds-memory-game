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
    handleCardClick : (pageStatus: string)
}
