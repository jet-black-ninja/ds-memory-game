import { useEffect } from "react";
import "../../styles/DefeatPage.scss";
import EndButtons from "../EndButton";
import { useSoundContext } from "../../contexts/SoundContext";
import backgroundVideo from '../../assets/transitions/YOU DIED (HD).mp4';
import backgroundImage from '../../assets/transitions/you-died.jpg';

function LosePage() {
    const {currSoundActive, playMainTrack, playDefeatTrack, stopDefeatTrack, stopMainTrack} = useSoundContext();
    useEffect(() => {
    if(currSoundActive){
        stopMainTrack();
        playDefeatTrack();
    }
    return()=> {
        stopDefeatTrack();
    };
    }, [currSoundActive,playDefeatTrack,playMainTrack,stopDefeatTrack,stopMainTrack]);
    return(
        <div className="main-lose-container">
            <video muted autoPlay playsInline id="backgroundVideo" poster={backgroundImage}>
                <source src={backgroundVideo} type="video/mp4"/>
            </video>
            <h1>
                You Were Defeated
            </h1>
            <p className="description">Teleporting Back To The Bonfire</p>
            <EndButtons activeType="lose"/>
        </div>
    );
}
export default LosePage;