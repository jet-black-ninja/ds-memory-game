import{useState, useEffect, useContext} from "react";
import {pageContext} from "../../App";
import loadingVideo from "../../assets/transitions/fogwall.mp4"
import loadingImage from "../../assets/transitions/loading.jfif"

type LoadingPageProp = {
    setPageActive: React.Dispatch<React.SetStateAction<boolean>>;
}
function LoadingPage({setPageActive}: LoadingPageProp){
    const [loadingText, setLoadingText] = useState("Loading");
    const {setDifficultyActive } = useContext(pageContext);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setPageActive(false);
            setDifficultyActive(true);
        }, 4500);
        return () => clearInterval(intervalID);
    }, [setPageActive, setDifficultyActive]);

    useEffect(() => {
        const textIntervalID = setInterval(() => {
            setLoadingText((prevText) => (prevText.length < 10 ? prevText+ "." : "Loading"));
        },500)
        return () => clearInterval(textIntervalID);
    })
}