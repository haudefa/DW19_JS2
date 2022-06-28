age = prompt("Veuiller entré votre âge")
 age = parseInt(age)
 if (age>18){
    console.error("vous êtes majeur")
 }
 if (age<18){
    console.error("vous êtes mineur")

 }
 if (age==18){
    console.error("vous pille majeur")
 }

 nombre = prompt("veuillez entré un nombre")
 nombre = parseInt(nombre)
 if (nombre>0){
    console.error("le nombre est positif")
 }
 if (nombre<0){
    console.error("le nombre est négatif")
 }

number = prompt("Veuiller entré un nombre")
number = parseInt(number)
if ((number % 2) ==0){
    console.error("le nombre est paire")
}
else{
    console.error("le nombre est impaire")
}