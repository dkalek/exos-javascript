

function initialise_extraction () {

/*document.getElementsByTagName renvoie toujours un tableau
s'il n'y a qu'une case, on la numérote avec [0] */

var body = document.getElementsByTagName('body')[0];
/*body.style.border = 'solid 10px black';*/

var main = document.getElementsByTagName('main')[0];
/*main.style.backgroundColor = 'yellow';*/

/*
retirer body et ne laisser que main sur la page, 1 : *écraser le contenu de body avec celui de main
body.innerHTML = "<main>"+main.innerHTML+"</main>"; 

-> si on veut conserver la variable main déclarée plus haut, il faut la recréer
var main = document.getElementsByTagName('main')[0];
*/

/*retirer body et ne laisser que main sur la page, 2 : effacer tous les enfants de body, raccrocher main*/
/* étape 1 : boucle sur les enfants de body*/

var fils = body.childNodes;

/* avec boucle for 
var nb_fils = fils.length;
for (i = 0 ; i < nb_fils.length ; i = i++){
  body.removeChild(fils[i]);
}
*/

/*plus simple avec boucle while */

 while (fils.length>0){
   body.removeChild(fils[0]);
 }

/*étape 2 : raccrocher main comme fils de body*/

body.appendChild(main);

/*suppression des CSS ; on ne sait pas qui est le noeud père*/

var styles = document.getElementsByTagName('style');
while (styles.length>0){
   styles[0].remove();
 }
 
 /*suppression de tous les LINK ; on ne sait pas qui est le noeud père
 
 var links = document.getElementsByTagName('link');
 while (links.length>0){
   links[0].remove();
 } */
 
 /*ciblage des feuilles de style seulement*/
 
 var links = getElementsByTagName('link');
 for (var i = links.length-1 ; i>=0 ; i++){
   if (links[i].getAttribute('rel') == 'stylesheet'){
     links[i].remove();
   }
 }
 
}

