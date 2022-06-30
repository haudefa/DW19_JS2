
document.getElementById("mon_texte").addEventListener("click", fonction2)

function fonction2(){
    document.getElementById("madiv").innerHTML=document.getElementById("mon_texte").value
}


// document.getElementById("monboutton").addEventListener("click", num)
// function num(){
//          a=parseInt(document.getElementById("madiv").innerHTML)+1
//         document.getElementById("madiv").innerHTML=a
    
// }
document.getElementById("majorité").addEventListener("click", age)
function age(){
    ton_age= parseInt(document.getElementById("mon_texte2").value)
    
    if(ton_age>18){
        document.getElementById("madiv").innerHTML="majeur"
    
    }
    else{
        document.getElementById("madiv").innerHTML="mineur"
    }
    
}

document.getElementById("calcule").addEventListener("click", multiplication)
function multiplication(){
    denominateur=parseInt(document.getElementById("mon_texte3").value);
    document.getElementById("madiv3").innerHTML="Table de:"+ denominateur
    for(a=0;a<11;a++){
        resulta=denominateur*a
        document.getElementById("madiv3").innerHTML+= "<br/>"+(denominateur +"*"+ a +"=" +resulta)
        console.error(denominateur +"*"+ a +"=" +resulta)
    }
    
}
document.getElementById("somme").addEventListener("click", somme)
function somme(){
    numb=parseInt(document.getElementById("mon_texte4").value)
    nomb=1
    for(b=1;b<=numb;b++){
        nomb=nomb*b
        document.getElementById("madiv4").innerHTML+= b+"*"
    }
    document.getElementById("madiv4").innerHTML+= "="+nomb
    
}