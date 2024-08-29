import shuffle from "./shuffle"
interface selectCardsAmountProps{
    charList:string[];
    selectedLevel:string;
}

export default function selectedCardsAmount({charList, selectedLevel}:selectCardsAmountProps){
    let newCharList = shuffle({charList});//randomize the list

    let dipslayCards = 0;
     
    switch(selectedLevel){
        case "easy":
            newCharList = newCharList.slice(0,5)
    }
}