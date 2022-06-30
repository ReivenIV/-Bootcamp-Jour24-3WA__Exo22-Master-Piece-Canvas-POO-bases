class Disk {

    // Création du constructeur
    constructor() {
        // Définition des propriétés et de leurs valeurs par défaut (color, radius, position)
        this.color = "gold";
        this.radius = 50;
        this.position = {
            x: 0,
            y: 0
        }
    }
    
    
    //   Change la valeur de la propriété radius
    //   @param {number} radius
     
    setRadius(randomRadius) {
        this.radius = randomRadius;
        
    }
    
     
     //Change la valeur de la propriété color
     //@param {string} color
     
    setColor(randomColor) {
        this.color = randomColor;
    }
    
    
     // Change la valeur de la propriété position
     // @param {Object} position Un objet possédant les propriétés x et y
     
    setPosition(mousePosition) {
        this.position = mousePosition;        
    }
    
    
     // Dessine le disque sur un canvas dont le contexte est donné en paramètre
     // @param context Le contexte du canvas sur lequel on souhaite dessiner le disque
     
    draw(context) {
        // Sauvegarde du contexte
        context.save();
        // Mise à jour de la couleur de remplissage
        let randomColor = getRandomColor
        // Tracé du disque
        
        context.beginPatch();
        


        //On crée un cercle avec la propiété arc(x,y, 50=rayon, Math.PI*2) = radio, true = antihoraire 
        context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, true);
        //replissage du cercle : 
        context.fill();
        //Dessine la forme en traçant son contour, stroke
        context.stroke();
        // Restauration du contexte
        context.restore();
    }
}
    