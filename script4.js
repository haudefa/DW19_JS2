function moyenne(n1,n2){
    let n3=(n1+n2)/2
    console.log(n3)

    
}
// function moyenne3(n1,n2,n3){
//     let n3=(n1+n2+n3)/3
//     console.log(n3)
// }
moyenne(18,25)


// let tab = [15,25,51,151]

// function moyenne_us(tab){
//     result=0
//     for(z=0;z<tab.length;z++){

//         result=result+tab[z]    
//     }
//     result=result/tab.length
//     return result
// }
// console.log(moyenne_us([15,15,2,43]))



function tableaux(tab1){
    
    return tab1
}
 
console.table(tableaux([4,5,4]))

function tableaux2(tab2){
    return tab2.length;
  

}
console.table(tableaux2([71,54,6,4,2,]))

function tableaux3(tab3){
  let lasomme=0
  for(let x=0;x<tab3.length;x++){
    lasomme=lasomme + tab3[x]
}
  return lasomme
}
console.log(tableaux3([5,8,6,4,2]))
 
function tableaux_max(_tabl){
      valeur_max=0
     for(z=0;z<tab.length;z++){
       if(tab[z]>valeur_max){valeur_max=tab[z]}
     }   
     return valeur_max
}

function tableaux_min(_tabl){
    valeur_min=tableaux_max(tab)
   
    for(v=0;v<tab.length;v++){
        if(tab[v]<valeur_min){ valeur_min=tab[v]; }
    return valeur_min;
}
}
function supinq(_tab, n){
    for(x=0;x<tab.length;x++){
        if(tab[x]< n){ return tab[x]}
    }

}

let tab=[456,823,2,5,43]
console.log(tableaux_max(tab)) 
console.log(tableaux_min(tab))
console.log(supinq(tab ,500))


// je creer une fonction 
// je creer une variable = l'index 0 du tableaux 
// avec un boucle qui va parcourire le tableaux
// avec une condition si la valeur est superieur ou egale a 500 alors 
// la valeur sera retouner 



