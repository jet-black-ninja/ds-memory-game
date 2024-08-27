import {useState, useEffect, createContext} from "react";
import './App.scss'
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
  selectedLevel:string[];
  winActive:boolean;
  loseActive:boolean;
  setCharList: React.Dispatch<React.SetStateAction<string
}


function App() {
  const [charList, setCharList] = useState<string[]>([]);
  const [winActive, setWinActive] = useState(false);
  const [loseActive, setLostActive] = useState(false);
  const [LoadingPageActive, setLoadingPageActive]= useState(true);
  const [difficultyActive, setDifficultyActive]= useState(false);
  const [selectLevelActive, setSelectLevelActive]  = useState("");
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const fetchedNameList = await fetchCharacters();
      const filteredList = filterImage(fetchedNameList);
      setCharList(filteredList);
    }
    fetchData();
  },[]);
  return (    
    <>
      
    </>
  )
}

export default App
