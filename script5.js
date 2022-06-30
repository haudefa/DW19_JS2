/**
 * Fonction qui
 * 1 prend en parametre un nombre et qui va renvoyer vrai si il est positif  ou faux si il est negatif
 * 2 prend en parametre un nombre et qui va renvoyer vrai si il est pair  ou faux si il est impair
 * 3 prend en parametre une chaine de caracter et qui va renvoyer vrai si il est = à votre prenom
 * 4 prend en parametre une chaine de caracter et qui va renvoyer vrai si il est = au deuxieme parametre
 */
function boulein(chiffre){
    if(chiffre>0){
        return true
    }
    else{
        return false
    }
    
}
console.log(boulein(5))

function pair(nombrpr){
    if(nombrpr%2==0){
        return true
    }
    else{
        return false
    }
    
}
console.log(pair(4))
function monprenom(nom){
   
    if(nom =="haudefa"){
       
        return true

    }
    else{
        return false
    }
}
console.log(monprenom("larissa"))


function mememot(mot1,mot2){
    if(mot1==mot2){
        return true

    }
    else{
        return false
    }
}
console.log(mememot("larissa","larissa"))


function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   var entier = entierAleatoire(5, 15);
   console.log(entier)
   

   function aleatoire(n){
      
      return entierAleatoire(1, n)
   }
   console.log(aleatoire(5))

   function  tablal(){
        tableaux=[]
    for (i=0;i<10;i++){
         tableaux[i]=entierAleatoire(1, 100)
        
    }
      return tableaux
   }
   console.table(tablal())
  
   function  tableal2(){
        tableaux2=[]
        n=entierAleatoire(1, 100)
    
    for (i=0;i<n;i++){
         tableaux2[i]=entierAleatoire(1, 100)
        
    }
      return tableaux2
   }
   console.table(tableal2())