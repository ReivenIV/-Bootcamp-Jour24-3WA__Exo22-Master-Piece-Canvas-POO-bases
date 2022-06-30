// *************************************************************************
// **************************** Variables globales *************************
// *************************************************************************
let canvas;
let context;


// *************************************************************************
// ********************************* Fonctions *****************************
// *************************************************************************
//fonction de récupération de la position du clic de la souris
function getMouseLocation(event)
{
    console.log(event)
    let offset = canvas.getBoundingClientRect();
    // Récupération de l'offset du canvas (sa position par rapport à la zone d'affichage, le viewport) getBoundingClientRect
    //! on demande à HTML/css nous donner la tailler de la bordure du canvas pour considerer cet space Null 
    let bordure = window.getComputedStyle(canvas)
    // Récupération des propriétés CSS calculées pour l'élément canvas et récupération des bordures getComputedStyle
    let mousePosition = {
        x: event.clientX - offset.left - parseInt(bordure.borderLeftWidth),
        y: event.clientY - offset.top - parseInt(bordure.borderTopWidth)
    }
    console.log(mousePosition.x, mousePosition.y);
    /**
     * Construction des coordonnées du clic (x,y) par rapport à l'origine du canvas
     * Des coordonnées de la souris par rapport au viewport (event.clientX, event.clientY) on soustrait :
     *  -> l'offset de l'élément canvas, c'est-à-dire l'espace autour du canvas jusqu'au bord de la fenêtre
     *  -> l'épaisseur des bordures du canvas
     */
     
    // Retour du résultat
    return mousePosition 
      
}

function onClickCanvas(event)
{
    // Récupération de la position du clic (appel de fonction)
    let mouseLocation = getMouseLocation(event)
    // Génération aléatoire de la taille du disque et de sa couleur
    let randomColor = getRandomColor();
    let randomRadius = getRandomInteger(10, 50);
    // Création d'un objet Disk
    let crazyDisk = new Disk();
    // Configuration des caractéristiques du disque (setters)
    crazyDisk.setColor(randomColor);
    crazyDisk.setRadius(randomRadius);
    crazyDisk.setPosition(mouseLocation);
    // On dessine le disque
    crazyDisk.draw(context);
}

// *************************************************************************
// ********************************* Code principal ************************
// *************************************************************************
document.addEventListener('DOMContentLoaded', function(){

    // Sélection de l'élément canvas
    canvas = document.querySelector("#masterpiece")
    // Sélection du "contexte" 2D qui va servir à dessiner
    context = canvas.getcontext("2d");
    // Installation du gestionnaire d'événement au clic sur le canvas
    canvas.addEventListener('click', onClickCanvas)
})