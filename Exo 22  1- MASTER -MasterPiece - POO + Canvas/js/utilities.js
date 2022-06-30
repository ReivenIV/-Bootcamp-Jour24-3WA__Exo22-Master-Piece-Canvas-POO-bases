
/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/
function getRandomColor()
{
    //création de la couleur rgb au hasard (3 tirages entre 0 et 255)
    let red = getRandomInteger(0,255)
    let green = getRandomInteger(0,255)
    let blue = getRandomInteger(0,255)
    //création d'une opacité au hasard entre 0 et 1
    let opacity = Math.random()
    //on retourne une couleur rgba
    return `rgba(${red},${green},${blue},${opacity})`
}

function getRandomInteger(min, max)
{
    // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}