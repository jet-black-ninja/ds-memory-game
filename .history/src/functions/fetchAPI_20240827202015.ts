export default async function fetchCharacters() {
    try{
        const response = await fetch("".{
            mode:"cors",
        });
        const result = await response.json();
        return result;
    }catch(err){
        console.log(err);
    }
}