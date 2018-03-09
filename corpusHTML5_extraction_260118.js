//récupérer les h2 et les mettre en liste à la place du body
// += pour concaténer

// function initialise_extraction (){
// var titres = document.getElementsByTagName('h2');
// var resultat = '<ul>';
// for (titre of titres) {
//   resultat += '<li>';
//   resultat += titre.innerHTML;
// }
// resultat += '<ul>';
// document.body.innerHTML = resultat;
// }

// idem mais avec ajout d'une nouvelle div
//
// // function initialise_extraction (){
// // var titres = document.getElementsByTagName('h2');
// // var resultat = '<ul>';
// // for (titre of titres) {
// //   resultat += '<li>';
// //   resultat += titre.innerHTML;
// // }
// // resultat += '<ul>';
// // document.body.innerHTML = resultat;
      //
      // var div = document.createElement('div');
      // div.innerHTML = resultat;
      // document.body.insertBefore(div,document.body.firstChild);
// // }



//même chose avec createTextNode

// function initialise_extraction () {
//   var titres = document.getElementsByTagName('h2');
//   var ol = document.createElement('ol');
//   for (titre of titres) {
//     var li = document.createElement('li');
//     var txt = document.createTextNode(titre.innerHTML);
//
//     li.appendChild(txt);
//     ol.appendChild(li);
//   }
// document.body.insertBefore(ol,document.body.firstChild);
// ol.style.backgroundColor = 'pink';
// }

//extraction feuilles textuelles

var nb_feuilles = 0;

function compte (noeud) {
  if (noeud.nodeType == 3) { //feuille textuelle ?
    nb_feuilles = nb_feuilles +1; //si oui, +1
  } else {
    for (e of noeud.childNodes) { //si non, inspecter chaque enfant
      compte(e);                  //récursivité   
    }
  }
  }

function initialise_extraction () {
  compte(document.body);
  document.body.innerHTML = nb_feuilles;
}
