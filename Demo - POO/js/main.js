const porsche = new Voiture()
console.log("objet porsche initialisé", porsche)

porsche.setMarque("Porsche")
porsche.setVitesse(280)

console.log("modified porsche", porsche)

const mustang = new Voiture()
console.log("objet mustang initialisé", mustang)

mustang.setMarque("mustang")
mustang.setVitesse(350)

console.log("modified mustang", mustang)


/*------------------------------------*/
/*---------EXEMPLE D'HERITAGE---------*/
/*-----------------------------------*/

//class parente
class Vehicle {
    constructor (name, machine) {
        this.name = name
        this.machine = machine
    }
    
    describe () {
        return `Le nom de la ${this.machine} est ${this.name}`
        //équivalent return "Le nom de la voiture est " + this.name
    }
}

//la class Car hérite de sa classe parente Véhicle
class Car extends Vehicle {
    
    constructor(name, machine, color){
        // Le constructeur parent est appelé avec super ici on récupère la propriété name de la classe vehicle
        super(name, machine)
        this.color = color
        this.coucou = "coucou"
    }
    
    describe(){
        //ici on appel la fonction describe hérité de la classe parente via super mais la couleur viens directement de la classe enfant Car
        return `${super.describe()} (${this.color})`
    }
    
}

//la class Car hérite de sa classe parente Véhicle
class Moto extends Vehicle {
    
    constructor(name, machine, color="orange"){
        // Le constructeur parent est appelé avec super ici on récupère la propriété name de la classe vehicle
        super(name, machine)
        this.color = color
    }
    //getter
    describe(){
        //ici on appel la fonction describe hérité de la classe parente via super mais la couleur viens directement de la classe enfant Car
        return `${super.describe()} (${this.color})`
    }
    //getter
    acceleration(){
        console.log("VRROOOOOAAAAAAAR!")
    }
}


let result = document.querySelector("#result")

let car = new Car("bmw","voiture", "noire")
console.log("bmw",car)

console.log(car.describe())
let p = document.createElement("p")
p.innerHTML = car.describe()

result.appendChild(p)
let moto = new Moto("ducati", "moto")

//du coup il affichera le résultat de la fonction describe de la classe enfant qui en elle même appel la fonction describe de la classe parente récupérant ainsi la phrase présente dans Vehicle
let p2 = document.createElement("p")
p2.innerHTML = moto.describe()
result.appendChild(p2)



class Banque {
    constructor(card){
        this.cardcredit = card
        this.payment = false
        this.EssaiPaiement()
    }
    
    EssaiPaiement(){
        this.payment = this.manipMoney(this.cardcredit)
        if(this.payment){
            return "Achat réussit"
        }else{
            return "Echec paiment"
        }
    }
    manipMoney(cardcredit){
        let calcul = Math.random()
        if(calcul < 0.5){
            return false
        }else{
            return true
        }
    }
}

class CarteAchat extends Banque{
    constructor(card){
        super(card)
        this.response = this.EssaiPaiement()
    }
    
    Achat(){
        console.log("Achat", this.response)
    }
}

//l'utilisateur envoi juste sa carte pour un paiement
let user = new CarteAchat("4559 9955 9999 3994")

console.log("user", user)

user.Achat()