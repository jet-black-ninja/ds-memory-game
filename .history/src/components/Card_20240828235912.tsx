import {useContext} from "react";
import {charImageMap} from "../functions/filterImage";
import {gameContextType, gameContext} from "./pages/GamePage";
import {pageContextType , pageContext} from "../App";
import {checkScoreCondition} from "../functions/checkScoreCondition";
import {checkWinCondition} from "../functions/checkWinCondition";
import "../styles/car"