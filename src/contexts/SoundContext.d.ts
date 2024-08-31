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
interface SoundProviderProps {
    children: React.ReactNode;
}
export declare const SoundContext: import("react").Context<soundContextType>;
export declare const useSoundContext: () => soundContextType;
export declare const SoundProvider: ({ children }: SoundProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
