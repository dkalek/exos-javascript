
function cherche (cible,noeud,couleur) {

	if (noeud.nodeType == 3) {         // feuille textuelle ?

		var texte = noeud.nodeValue;       // récupérer le contenu textuel
		var pere  =	noeud.parentNode;      // récupérer le père
		var position = texte.indexOf(cible);

		while (position>=0) { // si la cible est dans le texte

			// récupération des textes gauche et droit
			var txtgauche = texte.substr(0,position);
			var txtdroit  = texte.substr(position+cible.length);
			// alert(txtgauche+' - '+cible+' - '+txtdroit);

			// création des nouveaux nœuds
			var ngauche = document.createTextNode(txtgauche);
			//var ndroit  = document.createTextNode(txtdroit);
			var ncible  = document.createTextNode(cible);
			var nspan   = document.createElement('span');

			//style du nspan
			nspan.style.backgroundColor = couleur;

			// assemblage
			nspan.appendChild(ncible);
			pere.insertBefore(ngauche,noeud);
			pere.insertBefore(nspan,noeud);
			//pere.insertBefore(ndroit,noeud);


		  //calculs pour la suite

      texte = txtdroit;
			position = texte.indexOf(cible);
   		}

			var nfin  = document.createTextNode(texte);
			pere.insertBefore(nfin,noeud);

			//suppression du noeud initial
			noeud.remove(); //en dehors de la boucle pour garder le noeud comme repère tant que la boucle tourne

	} else {                          // non : on descend dans les enfants
		// copie préalable des enfants
		var enfants = []
		for (var i=0 ; i<noeud.childNodes.length ; i=i+1) {
			enfants[i] = noeud.childNodes[i];
		}
		// récursion sur la copie
		for (e of enfants) { // pour chaque enfant (d'origine)
			cherche(cible,e,couleur); // on cherche à partir de cet enfant
		}
	}
}

function recherche (cible,couleur) {
  cherche(cible,document.body,couleur);
}

function initialise_extraction () {

	// on cherche à partir de body
	recherche('algorithme','pink');

}

//s'il y a un noeud qui contient uniquement la cible (ici, 'algorithme') il y aura création d'une feuille textuelle vide à droite et à gauche
