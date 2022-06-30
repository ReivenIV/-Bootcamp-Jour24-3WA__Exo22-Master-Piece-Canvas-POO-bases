
/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/
function getRandomColor()
{
    //création de la couleur rgb au hasard (3 tirages entre 0 et 255)
    let r = getRandomInteger(0,255);
    let g = getRandomInteger(0,255);
    let b = getRandomInteger(0,255);
    //création d'une opacité au hasard entre 0 et 1
    let opacity = Math.random()//! Math.random() nous donne un numero entre 0 et 1 exemple -> 0,156897
    //on retourne une couleur rgba
    return `rgba(${r},${g},${b},${opacity})`;    
}

function getRandomInteger(min, max)
{
    // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}