export default async fuction fetchCharacters() {
    try{
        const response = await fetch("".{
            mode:"cors",
        });
        const result = await response.json();
        return result;
    }
}