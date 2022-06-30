function dessin(){
    console.log("body chargé!")
    
    //je vise ma balise canvas pour pouvoir manipuler ses propriétés qui nous permettent de dessiner à l'intérieur
    let canvas = document.querySelector("#test")
    
    //est-ce que le navrte le canvas et arrive à récupérer le context sur lequel on va dessiner
    if(canvas.getContext){
        //on définit le context du dessin (on peut aussi faire en 3D)
        let ctx = canvas.getContext("2d")
        console.log(ctx)
        
        //on définit la couleur de remplissage de notre figure
        ctx.fillStyle = 'red'
        //je crée un rectangle (ici un carré) qui démarre d'un point en haut à gauche (x,y,largeur,hauteur)
        ctx.fillRect(30, 30, 50, 50)
        
        ctx.fillStyle = "yellow";
        ctx.fillRect(10, 10, 50, 50)
        
        //rectangle sans remplissage
        //on définit la couleur des contours
        ctx.strokeStyle = "red"
        //on trace carré avec ses contours rouge
        ctx.strokeRect(150, 150, 50, 50)
        
        //rectangle qui efface
        ctx.clearRect(140, 140, 30, 30);
        
        // FAIRE DES DESSIN
        
        //on annonce un nouveau dessin (point de départ)
        ctx.beginPath();
        
        ctx.fillStyle = "black"
        //moveTo permet de placer son stylo à un point sans tracer (x, y)
        ctx.moveTo(200, 200);
        
        //lineTo nous permet de tracer d'un point A à un point B
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        //fill() Dessine une forme pleine en remplissant la zone de contenu du trajet
        ctx.fill()
        
        //on va faire un cercle hahaha
        ctx.beginPath();
        //on définit des contours violet
        ctx.strokeStyle = "purple";
        
        //on crée un cercle avec la propriété arc(x,y, 50=rayon, Math.PI*2= radian, true = antihoraire,
        ctx.arc(300, 300, 50, 0, Math.PI * 2, true);
        //Dessine la forme en traçant son contour. stroke
        ctx.stroke();
    }else{
        document.write("Ton navigateur est has been bro!")
    }
}