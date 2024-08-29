import {useEffect, useContext} from "react";
import { pageContext } from "../App";
import VolBtnOn from "../assets/volume_on.svg";
import VolBtnOff from "../assets/volume_off.svg";
import "../styles/Sounds.scss";
import {useSoundContext} from "../contexts/SoundContext.tsx";

// Function to keep track of the main game music & check on active sound button functionality

function SoundBtn(){
    const {currSoundActive, setCurrSoundActive, playMainTrack, playWinTrack, playDefeatTrack, stopMainTrack, stopDefeatTrack, stopWinTrack} = useSoundContext();
    const {winActive, loseActive} = useContext(pageContext);
    useEffect(() =>{
        const handleSoundEnd = () => {
            if(currSoundActive && !winActive && !loseActive){
                playMainTrack();
            }
        };
        handleSoundEnd();
        return () => stopMainTrack();
    },[currSoundActive, loseActive, winActive, stopMainTrack, playMainTrack ]);

    const toggleSound = () => {
        if(currSoundActive){
            stopMainTrack();
            stopDefeatTrack();
            stopWinTrack();
        } else {
            const selectedTrack = winActive ?  playWinTrack : loseActive? playDefeatTrack : playMainTrack;
            selectedTrack();
        }
        setCurrSoundActive((prevSound)=> !prevSound);
    }
    return (
        <div className = "sound-btn-container">
            <button onClick={toggleSound}>
                <img src={currSoundActive? VolBtnOn : VolBtnOff} alt = "volume Button" />
            </button>
        </div>
    )
}

export default SoundBtn;