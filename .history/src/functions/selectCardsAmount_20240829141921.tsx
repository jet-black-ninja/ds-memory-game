import shuffle from "./shuffle"
interface selectCardsAmountProps{
    charList:string[];
    selectedLevel:string;
}

export default function selectedCardsAmount({charList, selectedLevel}:selectCardsAmountProps){
    let newCharList = shuffle({charList});//randomize the list

    let displayCards = 0;
     
    switch(selectedLevel){
        case "easy":
            newCharList = newCharList.slice(0,5);
            displayCards = 3;
            break;
        case "medium":
            newCharList = newCharList.slice(0,10);
            displayCards = 5;
            break;
            
    }
}