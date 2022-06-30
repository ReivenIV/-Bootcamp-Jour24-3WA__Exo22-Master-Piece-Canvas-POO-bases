//ma class voiture va être la classe principale, elle pourra si elle le souhaite utiliser ma classe moteur pour faire fonctionner la voiture
class Voiture {
    //initialisation des propriétés de mon objet
    constructor(){
        this.marque = "Ferrari";
        this.vitesse = 320;
        this.moteur = new Moteur()
        /*on instancie la class Moteur pour pouvoir l'utiliser sur nos objets voiture
            Du coup on pour utiliser les propriétés du moteur pour le customiser ici, ainsi que les methodes (fonction)
            La voiture ici pourra se servir du moteur pour rouler 
            Lorsqu'on instancie une class dans une autre, on appel cela de la composition.
        */
    }
    
    //methode setter qui me permet de modifier la propriété marque de mon objet
    setMarque(newMarque){
        this.marque = newMarque
    }
    //setter pour changer la propriété vitesse
    setVitesse(fast){
        this.vitesse = fast
        this.moteur.appelTurbo()
    }
    //getter pour récupérer la valeur de la propriété vitesse
    getVitesse(){
        return this.vitesse
    }
}

//en Programmation Orienté Objet on a les setter et les getter
//les setter sont des méthodes permettant de modifier une propriété de la classe
//les getter sont des méthodes permettant de récupérer une propriété de la classe