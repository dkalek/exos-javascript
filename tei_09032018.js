//xsltproc tei2html.xsl sarrasine-dossmann.xml > sarrasine.html

//Ajouter dans le HTML via le XSLT :
//<button onclick="surligne_personnages();">Personnages</button>
//Ci-dessous fonction surligne_personnages() déclenchée par le bouton

var encours = 'off';

function surligne_personnages(){

  var couleur;

  if (encours=='off') {
    couleur = '#fdfde0';
    encours = 'on';
  } else {
    couleur = '#bae1ff';
    encours = 'off';
  }

  personnages = document.getElementsByClassName('persName');
  for (personnage of personnages) {
    personnage.style.backgroundColor = couleur;
  }
}

//pas de description dans le XML d'origine -> création d'un tableau associatif
var descriptions = {
  "monsieur de Lanty" : "Personnage de la Comédie Humaine",
  "maréchal de Carigliano" : "Personnage de la Comédie Humaine",
  "Marianina" : "Personnage de la Comédie Humaine",
  "comtesse de Lanty" : "Bonjour !",
  "Filippo" : "Hello world",
  "Esprit" : "BoOoOoOoh !",
  "Sarrasine" : "Lui, c'est le titre",
  "la Zambinella" : "She Protec but she Also Attac",
  "La Zambinella" : "She Protec but she Also Attac",
  "Zambinella" : "She Protec but she Also Attac",
};

function clic_personnage (personnage) {
  //alert(descriptions[personnage]);
  aside = document.getElementsByTagName('aside')[0];
  aside.innerHTML = '<h3>'+personnage+'</h3>'+descriptions[personnage];
  surligne_le_personnage(personnage);
}

//surligner toutes les occurrences d'un même personnage
function surligne_le_personnage (nom) {
  for (personnage of personnages){
    if (personnage.textContent == nom) {
      personnage.style.backgroundColor = '#baffc9';
    }
  }
}
