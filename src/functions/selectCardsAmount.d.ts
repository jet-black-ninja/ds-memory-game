interface selectCardsAmountProps {
    charList: string[];
    selectedLevel: string;
}
export default function selectedCardsAmount({ charList, selectedLevel }: selectCardsAmountProps): {
    selectedCards: string[];
    displayCards: number;
};
export {};
