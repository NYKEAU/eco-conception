function Ouvre(evt, NomOnglet) {
	//variables
	var i, ContenuOnglet, tablinks;
	
	//recuperation des contenu des onglets
	ContenuOnglet = document.getElementsByClassName("ContenuOnglet");
	for (i = 0; i < ContenuOnglet.length; i++) {
		ContenuOnglet[i].style.display = "none";
	}

	//recuperation des boutons
	tablinks = document.getElementsByClassName("bouton_1");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	//on affiche l'onglet en argument de cette fonction
	document.getElementById(NomOnglet).style.display = "block";
	evt.currentTarget.className += " active";
}


//SOURCE: https://www.w3schools.com/howto/howto_js_tabs.asp