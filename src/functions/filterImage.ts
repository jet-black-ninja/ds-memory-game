//TODO imports

const charImageMap: {[key:string ]:string}={

}

function filterImage(charList:string[]){
    console.log(charList);
    const filteredList = charList.filter((charName) => charImageMap[charName]);
    return filteredList;
}

export {filterImage, charImageMap}