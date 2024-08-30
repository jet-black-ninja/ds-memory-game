
import abyssImage from '../assets/abyss-watchers.jpg';
import aldrichImage from '../assets/aldrich-devourer-of-gods.jpg'
import alvinaImage from '../assets/alvina.jpg'
import andreImage from '../assets/andre-the-blacksmith.jpg'
import anriImage from '../assets/Anri-of-astora.jpg'
import bedImage from '../assets/bed-of-chaos.jpg';
import bellImage from '../assets/bell-gargoyle.jpg';
import loganImage from '../assets/big-hat-logan.jpg'
import gundryImage from '../assets/Champion-Gundyr.jpg';
import quelaagImage from '../assets/chaos-witch-quelaag.jpg';
import crestFallenImage from '../assets/Crestfall-warrior.jpg';
import pricillaImage from '../assets/crossbreed-priscilla.jpg';
import midirImage from '../assets/darkeater-midir.jpg';
import dsArmorImage from '../assets/Dragonslayer-Armour.jpg';
import ornsteinImage from '../assets/dragonslayer-ornstein.jpg';
import eygonImage from '../assets/eygon-of-carim.jpg';
import fairLady from '../assets/fair-lady.jpg';
import firekeeperImage from '../assets/fire-keeper.jpg';
import fourKindsImage from '../assets/Four-Kings.jpg';
import nitoImage from '../assets/gravelord-nito.jpg';
import sifImage from '../assets/great-grey-wolf-sif.jpg'
import greiratImage from '../assets/greirat-of-the-undead-settlement.jpg'
import gwynevereImage from '../assets/gwynevere.jpg';
import gywnImage from '../assets/gywn-lord-of-cinder.jpg';
import goughImage from '../assets/hawkeye-gough.jpg';
import hawkwoodImage from '../assets/hawkwood-the-deserter.jpg';
import ingwardImage from '../assets/ingward.jpg';
import karlaImage from "../assets/karla.jpg";
import ladyDarkImage from '../assets/lady-of-the-darkling.jpg';
import laurentiousImage from '../assets/laurentious-of-the-great-swamp.jpg';
import lautrecImage from '../assets/lautrec-of-carim.jpg';
import namelessImage from '../assets/Nameless-King.jpg';
import oceirosImage from '../assets/Oceiros-the-consumed-king.jpg';
import orbeckImage from '../assets/orbeck-of-vinhiem.jpg';
import oswaldImage from '../assets/oswald-of-carim.jpg';
import pontiffImage from '../assets/Pontiff-Sulyvahn.jpg';
import quelanaImage from '../assets/quelana-of-izaleth.jpg';
import seathImage from '../assets/Seath-the-Scaleless.jpg';
import shivaImage from '../assets/shiva-of-the-east.jpg';
import siegmeyerImage from '../assets/siegmeyer-of-catarina.jpg';
import sirrisImage from '../assets/Sirris-of-the-Sunless-Realms.jpg';
import vilhelmImage from '../assets/sir-vilhelm.jpg';
import friedeImage from '../assets/Sister-Friede.jpg';
import gaelImage from '../assets/Slave-Knight-Gael.jpg';
import smoughImage from '../assets/smough.jpg';
import solairImage from '../assets/solair-of-astora.jpg';
import cinderImage from '../assets/Soul-of-Cinder.jpg';
import patchesImage from '../assets/trusty-Patches.jpg';
import twinsImage from '../assets/Twin-Princes.jpg';
import yhormImage from '../assets/Yhorm-the-giant.jpg';
import yuriaImage from '../assets/yuria-of-londor.jpg';
import capraDemonImage from '../assets/capra-demon.png';
import dancerImage from '../assets/dancer-of-the-boreal-valley.png';
import darksonImage from '../assets/dark-son-gwyndolin.png';
import domhallImage from '../assets/domhnall-of-zina.png';
import duskImage from '../assets/dusk-of-oolacile.png';
import filianoreImage from '../assets/filianore.png';
import framptImage from '../assets/kingseeker-frampt.png';

const charImageMap: {[key:string ]:string}={
    "abyss-walkers":abyssImage,
    "aldrich-devourer-of-gods":aldrichImage,
    alvina:alvinaImage,
    "andre-the-blacksmith":andreImage,
    "anri-of-astora":anriImage,
    "bed-of-chaos":bedImage,
    "bell-gargoyle":bellImage,
    "big-hat-logan":loganImage,
    "champion-gundyr":gundryImage,
    "chaos-witch-quelaag":quelaagImage,
    "crestfall-warrior":crestFallenImage,
    "crossbreed-priscilla":pricillaImage,
    "darkeater-midir":midirImage,
    "dragonslayer-armour":dsArmorImage,
    "dragonslayer-ornstein":ornsteinImage,
    "eygon-of-carim":eygonImage,
    "fair-lady":fairLady,
    "fire-keeper":firekeeperImage,
    "four-kings":fourKindsImage,
    "gravelord-nito":nitoImage,
    "great-grey-wolf-sif":sifImage,
    "greirat-of-the-undead-settlement":greiratImage,
    "gwynevere":gwynevereImage,
    "gywn-lord-of-cinder":gywnImage,
    "hawkeye-gough":goughImage,
    "hawkwood-the-deserter":hawkwoodImage,
    "ingward":ingwardImage,
    "karla":karlaImage,
    "lady-of-the-darkling":ladyDarkImage,
    "laurentious-of-the-great-swamp":laurentiousImage,
    "lautrec-of-carim":lautrecImage,
    "nameless-king":namelessImage,
    "oceiros-the-consumed-king":oceirosImage,
    "orbeck-of-vinhiem":orbeckImage,
    "oswald-of-carim":oswaldImage,
    "pontiff-sulyvahn":pontiffImage,
    "quelana-of-izaleth":quelanaImage,
    "seath-the-scaleless":seathImage,
    "shiva-of-the-east":shivaImage,
    "siegmeyer-of-catarina":siegmeyerImage,
    "sirris-of-the-sunless-realms":sirrisImage,
    "sir-vilhelm":vilhelmImage,
    "sister-friede":friedeImage,
    "slave-knight-gael":gaelImage,
    "executioner-smough":smoughImage,
    "solair-of-astora":solairImage,
    "soul-of-cinder":cinderImage,
    "trusty-patches":patchesImage,
    "twin-princes":twinsImage,
    "yhorm-the-giant":yhormImage,
    "yuria-of-londor":yuriaImage,
    "capra-demon": capraDemonImage,
    "dancer-of-the-boreal-valley": dancerImage,
    "dark-son-gwyndolin": darksonImage,
    "domhnall-of-zina": domhallImage,
    "dusk-of-oolacile": duskImage,
    "filianore": filianoreImage,
    "kingseeker-frampt": framptImage,
}

function filterImage(charList:string[]){
    console.log(charList);
    const filteredList = charList.filter((charName) => charImageMap[charName]);
    return filteredList;
}

export {filterImage, charImageMap}