import {useState, useEffect, createContext} from "react";
import './styles/App.scss'
import fetchCharacters from "./functions/fetchAPI.ts";
import {filterImage} from "./functions/filterImage.ts";
import LoadingPage from "./components/pages/LoadingPage.tsx";
import GamePage from "./components/pages/GamePage.tsx";
import DifficultyPage from "./components/pages/DifficultyPage.tsx";
import WinPage from "./components/pages/WinPage.tsx";
import LosePage from "./components/pages/LosePage.tsx";
import SoundBtn from "./components/SoundBtn.tsx";
import { SoundProvider } from "./contexts/SoundContext.tsx";

export interface pageContextType {
  charList:string[];
  currScore:number;
  bestScore:number;
  selectedLevel:string;
  winActive:boolean;
  loseActive:boolean;
  setCharList: React.Dispatch<React.SetStateAction<string[]>>;
  setWinActive: React.Dispatch<React.SetStateAction<boolean>>;
  setLoseActive: React.Dispatch<React.SetStateAction<boolean>>;
  setDifficultyActive: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrScore: React.Dispatch<React.SetStateAction<number>>;
  setBestScore: React.Dispatch<React.SetStateAction<number>>;
  setSelectedLevel:React.Dispatch<React.SetStateAction<string>>;
}

export const pageContext = createContext<pageContextType>({} as pageContextType);
function App() {
  const [charList, setCharList] = useState<string[]>([]);
  const [winActive, setWinActive] = useState(false);
  const [loseActive, setLoseActive] = useState(false);
  const [LoadingPageActive, setLoadingPageActive]= useState(true);
  const [difficultyActive, setDifficultyActive]= useState(false);
  const [selectedLevel, setSelectedLevel]  = useState("");
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      // const fetchedNameList = await fetchCharacters();
      // const filteredList = filterImage(fetchedNameList);
      
      setCharList([
        "abyss-walkers",
        "aldrich-devourer-of-gods",
        "alvina",
        "andre-the-blacksmith",
        "anri-of-astora",
        "bed-of-chaos",
        "bell-gargoyle",
        "big-hat-logan",
        "champion-gundyr",
        "chaos-witch-quelaag",
        "crestfall-warrior",
        "crossbreed-priscilla",
        "darkeater-midir",
        "dragonslayer-armour",
        "dragonslayer-ornstein",
        "eygon-of-carim",
        "fair-lady",
        "fire-keeper",    "four-kings",
        "gravelord-nito",
        "great-grey-wolf-sif",
        "greirat-of-the-undead-settlement",
        "gwynevere",
        "gywn-lord-of-cinder",
        "hawkeye-gough",
        "hawkwood-the-deserter",
        "ingward",
        "karla",
        "lady-of-the-darkling",
        "laurentious-of-the-great-swamp",
        "lautrec-of-carim",
        "nameless-king",
        "oceiros-the-consumed-king",
        "orbeck-of-vinhiem",
        "oswald-of-carim",
        "pontiff-sulyvahn",
        "quelana-of-izaleth",
        "seath-the-scaleless",
        "shiva-of-the-east",
        "siegmeyer-of-catarina",
        "sirris-of-the-sunless-realms",
        "sir-vilhelm",
        "sister-friede",
        "slave-knight-gael",
        "executioner-smough",
        "solair-of-astora",
        "soul-of-cinder",
        "trusty-patches",
        "twin-princes",
        "yhorm-the-giant",
        "yuria-of-londor",
        "capra-demon",
        "dancer-of-the-boreal-valley",
        "dark-son-gwyndolin",
        "domhnall-of-zina",
        "dusk-of-oolacile",
        "filianore",
        "kingseeker-frampt",
    ]);
    }
    fetchData();
  },[]);
  return (    
    <SoundProvider>
       <pageContext.Provider value={{ charList, setCharList, winActive, loseActive, setDifficultyActive, setWinActive, setLoseActive, currScore, bestScore, setCurrScore, setBestScore, selectedLevel, setSelectedLevel }}>
				<>
					{LoadingPageActive ? <LoadingPage setPageActive={setLoadingPageActive} /> 
          : difficultyActive ? <DifficultyPage /> 
          : winActive ? <WinPage /> 
          : loseActive ? <LosePage /> 
          : <GamePage />}
					<SoundBtn />
				</>
			</pageContext.Provider>
    </SoundProvider>
    
  );
}

export default App
