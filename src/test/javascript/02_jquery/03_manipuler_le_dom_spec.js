describe("Manipuler le DOM", function() {

	it("Text to DOM", function() {
		//La méthode $ (ou jQuery) permet de transformer du texte en DOM
		//Faites passer les tests
		var dom = $( /**/ );

		expect(dom).toBe('span');
		expect(dom).toHaveClass('ma-classe');	
		expect(dom).toHaveId('mon-id');	
	});

	it("Ajouter du DOM", function() {		
		//La méthode append permet d'ajouter du DOM _après_ une balise
		//Faites passer les tests
		setFixtures(
			'<div id="mon-id"> \
				<span class="ma-classe"></span> \
			</div>');

		/**/

		expect($('#mon-id span')).toHaveLength(2);
		expect($('#mon-id span')).toBe('span');
		expect($('#mon-id span').last()).toHaveClass('autre-classe');
	});

	it("Supprimer du DOM", function() {		
		//La méthode remove permet de supprimer du DOM
		//Faites passer les tests
		setFixtures(
			'<div id="mon-id"> \
				<span class="ma-classe"></span> \
				<span class="mon-autre-classe"></span> \
			</div>');

		/**/

		expect($('#mon-id span')).toHaveLength(1);
		expect($('#mon-id span')).toHaveClass('ma-classe');
	});

	it("Changer de classe CSS : toggleClass()", function() {
		setFixtures('<span id="mon-id" class="ma-classe"></span>');

		function toggleClass() {
			//Votre code ici
		}

		expect($('#mon-id')).toHaveAttr('class', 'ma-classe');

		toggleClass();
		expect($('#mon-id')).toHaveAttr('class', '');

		toggleClass();
		expect($('#mon-id')).toHaveAttr('class', 'ma-classe');
	})

	it("d'autres fonctions", function() {
		//Il existe de nombreux autres méthode pour manipuler le DOM
		//Une liste complète est disponible ici : http://api.jquery.com/category/manipulation/
	});
});

describe("Pour aller plus loin", function() {
	//http://learn.jquery.com/using-jquery-core/data-methods/
	//http://learn.jquery.com/performance/detach-elements-before-work-with-them/
})

