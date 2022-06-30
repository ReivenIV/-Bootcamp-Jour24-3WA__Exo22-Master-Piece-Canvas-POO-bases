class Moteur{
    //le constructeur initialise les propriétés par défaut de notre objet
    constructor(){
        //this représente la class au moment de l'instanciation de l'objet
        this.turbo = 500
        this.suspension = "sparco"
    }
    //methode: fonction qui nous permet de manipuler notre objet
    appelTurbo(){
        console.log(`je déclenche le turbo qui fait ${this.turbo} cv`)
    }
}
