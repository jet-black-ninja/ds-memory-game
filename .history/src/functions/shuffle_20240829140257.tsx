interface shuffleProps{
    charList: string[];
}

export default function shuffle ({charList}:shuffleProps){
    const currList = [...charList];
    for(let i = currList.length -1 ; i> 0 ; i--){
        const j = Math.floor(Math.random() * (i+1)
    }
}