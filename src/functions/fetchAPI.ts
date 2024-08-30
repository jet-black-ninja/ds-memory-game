export default async function fetchCharacters() {
    try{
        const response = await fetch("http://localhost:8080/charList",{
            mode:"cors",
        });
        const result = await response.json();
        return result;
    }catch(err){
        console.log(err);
    }
}