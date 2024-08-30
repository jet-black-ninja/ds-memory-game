import {useContext, useEffect} from "react";
import {gameContextType , gameContext} from "./pages/GamePage";
import Card from "./Card";
import Shuffle from "../functions/shuffle";
import {savedClicked} from "../functions/checkScoreCondition";

interface CardListUIProps{
    currCharList:string[];
    showCardsNumber:number;
}

let shownCharList:string[] = [];

function CardListUI ({currCharList, showCardsNumber}: CardListUIProps) {
    const {isFlipped , shuffleActive } = useContext<gameContextType>(gameContext);

    useEffect(() => {
        shownCharList = [];
    },[]);

    /**
	 * CASE 1: not flipped, avoid shuffling the cards UI and wait until flip is active again to shuffle
	 * CASE 2: shuffle active when we're handling card clicks, otherwise shuffle always inactive (e.g. to prevent rerender shuffles from sound btn)
	 * CASE 3: we automatically shuffle at very beginning of cardList ui render.
	*/

    if((!isFlipped && shuffleActive) || shownCharList.length===0){
        //find the first char index that in not clicked yet
        const targetIndex = currCharList.findIndex((char)=> !savedClicked.includes(char));
        const newCurrCharList = [...currCharList];
        // Switch the first element and the target unclicked index so that the shownCharList will always have one 'unclicked' card when we slice the list 
        if(targetIndex !==-1){
            [newCurrCharList[0],newCurrCharList[targetIndex]]=[newCurrCharList[targetIndex], newCurrCharList[0]]
        }
        /**
		 *  We need to show a certain number of card based on the difficulty (slice the amount of cards we need).
		 *  Then, we shuffle the current list of shown cards so the first element isn't always the 'unclicked' card.
		 */
        shownCharList = newCurrCharList.slice(0, showCardsNumber);
		shownCharList = Shuffle({ charList: shownCharList });
    }
    /**
	 * To prevent the regeneration of cards every time there's a state change we have to set the keys as initial indexes instead of using uuidv4()
	 */
    return (
		<>
			{shownCharList.map((char, index) => (
				<Card key={index} charName={char} />
			))}
		</>
	);
}
export default CardListUI;
