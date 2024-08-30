import {useState, useContext ,createContext} from "react"

import useSound from "use-sound";
//import sounds
import DS3track from "../assets/sounds/02 - DARK SOULS Ⅲ.mp3";
import firelinkTrack1 from '../assets/sounds/02 - Firelink Shrine.mp3';
import firelinkTrack2 from '../assets/sounds/04 - Firelink Shrine.mp3';
import namelessTrack from '../assets/sounds/17 - Nameless King.mp3';
import abyssTrack from '../assets/sounds/18 - Abyss Watchers.mp3';
import darksonTrack from '../assets/sounds/21 - Dark Sun Gwyndolin.mp3';
import gwynTrack from '../assets/sounds/22 - Gwyn, Lord of Cinder.mp3';
import SOCtrack from "../assets/sounds/22 - Soul of Cinder.mp3";
import DSTrack from '../assets/sounds/29 - DARK SOULS.mp3';
import peaceTrack from "../assets/sounds/31 - A Moment's Peace.mp3";
import epilogueTrack from '../assets/sounds/31 - Epilogue.mp3'
import cardFlip from "../assets/sounds/flip_card.mp3"
import winSound from "../assets/sounds/31 - Epilogue.mp3";
import defeatSound from "../assets/sounds/dark-souls-you-died.mp3"

//
interface soundContextType {
    soundFiles: string[];
    currentSoundIndex: number;
    currSoundActive: boolean;
    playFlipCard: () => void;
    playMainTrack: () => void;
    playWinTrack: () => void;
    playDefeatTrack: () => void;
    stopFlipCard: () => void;
    stopMainTrack: () => void;
    stopWinTrack: () => void;
    stopDefeatTrack: () => void;
    setCurrSoundActive: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentSoundIndex: React.Dispatch<React.SetStateAction<number>>;
}


interface SoundProviderProps{
    children: React.ReactNode;
}

export const SoundContext = createContext<soundContextType>({} as soundContextType);
export const useSoundContext = () => useContext(SoundContext);

export const SoundProvider = ({children}: SoundProviderProps) =>{
    const soundFiles = [DS3track,firelinkTrack1, firelinkTrack2,namelessTrack,abyssTrack, darksonTrack, gwynTrack,SOCtrack,DSTrack,peaceTrack,epilogueTrack, epilogueTrack, epilogueTrack, epilogueTrack];
    const defeatTrack = defeatSound;
    const winTrack = winSound;
    const flipCard= cardFlip;

    const [currSoundActive , setCurrSoundActive] = useState<boolean>(false);
    const [currentSoundIndex, setCurrentSoundIndex] = useState(0);
    const [playFlipCard, {stop:stopFlipCard}]=useSound(flipCard, {volume:.20});
    const [playWinTrack,{stop:stopWinTrack}] = useSound(winTrack, {loop:false});
    const [playDefeatTrack, {stop:stopDefeatTrack}] = useSound(defeatTrack, {loop:false});
    const [playMainTrack, {stop:stopMainTrack}] = useSound(soundFiles[currentSoundIndex],{
        onend: () =>{
            const nextIndex = (currentSoundIndex + 1) % soundFiles.length;
            setCurrentSoundIndex(nextIndex);
        },
    });

    const value = {
        currSoundActive,
        soundFiles,
        currentSoundIndex,
        setCurrSoundActive,
        setCurrentSoundIndex,
        playFlipCard,
        playMainTrack,
        playWinTrack,
        playDefeatTrack,
        stopFlipCard,
        stopMainTrack,
        stopWinTrack,
        stopDefeatTrack,
    };
    return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
}