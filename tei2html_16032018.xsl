<?xml version="1.0" ?>

<xsl:stylesheet version='1.0' xmlns:xsl='http://www.w3.org/1999/XSL/Transform'>

  <xsl:output method="html"
	      doctype-system="about:legacy-compat"
	      indent="yes" />



<!-- traitement de la racine -->

<xsl:template match="/">
<html lang="fr">
<head>
<title>Doc TEI</title>
<link rel="stylesheet" href="tei.css" />
<script src="tei_16032018.js"></script>
</head>
<body>
<h1>Document TEI</h1>

<p>
  Cette page est produite automatiquement dans le cadre des cours de JavaScript.
</p>

<button onclick="surligne_personnages();">Personnages</button>

<!-- 16032018 = modification de la transformation pour ajout du bouton de recherche -->

<button onclick="mot_de_recherche();">Recherche dans le texte</button>

<aside>

</aside>


<xsl:apply-templates select="//body//p | //body//q | //body//said" />

</body>
</html>
</xsl:template>


<!-- traitement des fils immédiats de body -->

<xsl:template match="p|q|said">
  <p>
    <xsl:apply-templates />
  </p>
</xsl:template>


<!-- traitement d'un persName -->
<!-- 16032018 = modification de la transformation pour conservation des attributs key + id /!\ ne pas oublier data- pour conformité HTML5 -->

<xsl:template match="persName">
  <span class="persName" onclick="clic_perso('{@key}');">
    <xsl:attribute name="data-key"><xsl:value-of select="@key"/></xsl:attribute>
    <xsl:attribute name="data-id"><xsl:value-of select="@id"/></xsl:attribute>
    <xsl:apply-templates />
  </span>
</xsl:template>

<!-- à traiter

On ne touche pas au xml (figé), html (produit automatiquement).
On peu modifier : xslt, css, js.

Mise en valeur de « persName » :
1. ajouter un bouton qui surligne les personnages
2. permettre le clic sur un personnage
3. afficher la présentation du personnage, avec son image
4. ne surligner que le personnage choisi
5. gérer les clics multiples et l'effacement des sélections précédentes
6. mettre en place un moteur de recherche
7. propager les recherches à d'autres fichiers


Mise en valeur de « choice » :
choix d'une édition ou d'une autre.

Mise en valeur de « note ».

Voir aussi : placeName, foreign, time et date, etc.

Simples travaux de visualisation ?
pb : page break
hi : rend=i  => italic, rend=sc => petites capitales, rend= etc.



-->

</xsl:stylesheet>
