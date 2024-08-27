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
function App() {
  const [charList, setCharList] = useState<string[]>([]);
  const [winActive, setWinActive] = useState(false);
  const [loseActive, setLostActive] = useState(false);
  const [LoadingPageActive, setLoadingPageActive]= useState(true);
  const [difficultyActive, setDifficultyActive]= useState(false);
  const [selectLevelActive, setSelectLevelActive]  = useState("");
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() = > {
    async function fetchDate() {
      const fetchedNameList:array[] = await fetchCharacters();
      const filteredList = filterImages(fetchedNameList);
      setCharList(filteredList);

    }
  })
  return (    <>
      
    </>
  )
}

export default App
