// age = prompt("Veuiller entré votre âge")
//  age = parseInt(age)
//  if (age>18){
//     console.error("vous êtes majeur")
//  }
//  if (age<18){
//     console.error("vous êtes mineur")

//  }
//  if (age==18){
//     console.error("vous pille majeur")
//  }

//  nombre = prompt("veuillez entré un nombre")
//  nombre = parseInt(nombre)
//  if (nombre>0){
//     console.error("le nombre est positif")
//  }
//  if (nombre<0){
//     console.error("le nombre est négatif")
//  }

// number = prompt("Veuiller entré un nombre")
// number = parseInt(number)
// if ((number % 2) ==0){
//     console.error("le nombre est paire")
// }
// else{
//     console.error("le nombre est impaire")
// }
// prenom = "haudefa"
// nom = prompt("veuiller entrér votre prénom")
// if (prenom==nom){
//     console.error("sympa on a le mêmê prénom")
// }
// else{
//     console.error("")
// }
// for (i=0;i<5;i++){
//     alert("Sympa une boucle")
// }

for (i=1;i<100;i++){
    console.error(i)
}
for (y=100;y<200;y++){
    console.log(y)
}
for(a=0;a<11;a++){
    console.log("table de " +a)
     for(b=0;b<11;b++){
        resulta=b*a
         console.log(b+" * "+ a +" = "+ resulta)
    }
}
for (c=0;c<11;c++){
     console.log(c)
     for (d=0;d<11;d++){
        console.log(c+ "+" + d + " = " + (c+d))
        
   }
}

g="*"
for (h=0; h<101;h++){
    console.log(g)
    
}

for (h=0; h<101;h++){
    console.log (g+g+g+g+g)
    
   
}
function fonctions(){
    console.log("je test ma première fonction")
}
fonctions();
function recup_age(){
    age= prompt("Veuiller entré votre âge")
    console.log(age)
    age2=parseInt(age)+2
    console.log(age2)

}
recup_age();
function afficher(prenom){
    console.log("bonjour" + prenom)
}
afficher("haudefa");
afficher("larissa")
afficher("gamal")

function voir(numb){
    numb = parseInt (numb)+2
    console.log( numb)
    if (numb>0){
        console.log("ce nombre est positif")
    }
    else{
        console.log("ce nombre est négatif")
    }
    if((numb %2)==0){
        console.log("ce nombre est paire")
    }
    else{
        console.log("ce nombre est impaire")
    }
}
voir(5)
voir(4)
voir(-40)

