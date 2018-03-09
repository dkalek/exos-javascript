function cherche (noeud,motif) {

  if (noeud.nodeType == 3) {

    var texte = noeud.nodeValue;
    var pere = noeud.parentNode;
    if (motif.test(texte)) {
      pere.style.backgrounColor = 'orange';
    } else {
      for (e of noeud.childNodes) {
        cherche(e,motif);
      }
    }
  }
}

var re = new RegExp('éduc\\w+','gi');
cherche(document.body,re);
