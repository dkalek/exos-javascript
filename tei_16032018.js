//xsltproc tei2html.xsl loeuvre-zola-briere.xml > loeuvre_work.html

//Ajouter dans le HTML via le XSLT :
//<button onclick="surligne_personnages();">Personnages</button>
//Ci-dessous fonction surligne_personnages() déclenchée par le bouton

var encours = 'off';

function surligne_personnages(){

  var couleur;

  if (encours=='off') {
    couleur = '#a85f75';
    encours = 'on';
  } else {
    couleur = '#ccf';
    encours = 'off';
  }

  personnages = document.getElementsByClassName('persName');
  for (personnage of personnages) {
    personnage.style.backgroundColor = couleur;
  }
}

//pas de description dans le XML d'origine -> création d'un tableau associatif
var descriptions = {
  "Claude" : "C'est un Lantier, donc il va avoir une vie horrible.",
  "Christine" : "Elle traîne avec un Lantier, donc elle va avoir une vie horrible.",
  "Sandoz" : "Apparemment, il s'est reconverti dans l'industrie pharmaceutique.",
};

var images = {
  "Claude" : "claude.jpg",
  "Christine" : "christine.jpg",
  "Sandoz" : "sandoz.jpeg"
};

function clic_perso (personnage) {
  aside = document.getElementsByTagName('aside')[0];
  aside.innerHTML = '<h3>'+personnage+'</h3>'+descriptions[personnage];

  img = document.createElement('img');
  img.setAttribute('src',images[personnage]);
  img.style.width = '100px',
  aside.appendChild(img);
  
  surligne_le_personnage(personnage);


}

//surligner toutes les occurrences d'un même personnage
function surligne_le_personnage (nom) {
  for (personnage of personnages){
    if (personnage.getAttribute('data-key') == nom) {
      personnage.style.backgroundColor = '#ff3f56';

    }
  }
}


//recherche dans le texte
function recherche (cible,noeud,fond) {
  if (noeud.nodeType == 3) {

    var texte = noeud.nodeValue;
    var parent = noeud.parentNode;

    if (texte.indexOf(cible)>=0) {
      parent.style.backgroundColor = fond;
    }
  } else {
    for (e of noeud.childNodes) {
      recherche(cible,e,fond);
    }
  }
}

var precedente = 'pouet';

function mot_de_recherche () {
  var cible = prompt('Mot à chercher ?');
  recherche(precedente,document.body,'#ccf');
  recherche(cible,document.body,'#93fff9');
  precedente = cible;
}
