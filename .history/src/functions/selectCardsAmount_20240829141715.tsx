import shuffle from "./shuffle"
interface selectCardsAmountProps{
    charList:string[];
    selectedLevel:string;
}

export default function selectedCardsAmount({charList, selectedLeve}:selectCardsAmountProps){
    let newCharList = shuffle({charList});//randomize the list

    let dipslayCards = 0
}