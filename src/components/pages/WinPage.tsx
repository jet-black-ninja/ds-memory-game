import { useEffect } from "react";
import "../../styles/WinPage.scss";
import EndButtons from "../EndButton";
import { useSoundContext } from "../../contexts/SoundContext";
import backgroundVideo from "../../assets/transitions/Victory-achieved.mp4"
import backgroundImage from '../../assets/transitions/VICTORY ACHIEVED (1).png';

function WinPage() {
    const {currSoundActive, playMainTrack , playWinTrack, stopWinTrack, stopMainTrack} =useSoundContext();

    useEffect(()=>{
        if(currSoundActive){
            stopMainTrack();
            playWinTrack();
        }
        return () => {
            stopWinTrack();
        }
    },[currSoundActive, playMainTrack, playWinTrack, stopWinTrack, stopMainTrack]);

    return (
        <div className = "main-win-container">
            <h1>You Won, Chosen Undead</h1>
            <p className = "description"> Thy Strength Befits a Crown </p>
            <video muted autoPlay loop playsInline id="backgroundVideo" poster={backgroundImage}>
                <source src={backgroundVideo} type="video/mp4"/>
            </video>
            <EndButtons activeType="win"/>
        </div>
    )
}
export default WinPage;