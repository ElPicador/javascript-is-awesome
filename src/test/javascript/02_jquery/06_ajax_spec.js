//http://learn.jquery.com/ajax/

describe("Avant de commencer avec AJAX", function() {
	it("jasmine et les espions", function() {
		//En jasmine un mock s'appelle un spy (espion)
		//Comme javascript est un langage dynamique on peut déclarer un mock à la volée
		//sans avoir de vraie fonction ou classe derrière
		var espion = jasmine.createSpy('espion');

		//On peut donc l'appeler comme on veut
		espion('je', 'suis', 1, espion);

		//On vérifie ensuite pleins de choses dessus
		expect(espion).toHaveBeenCalled();
		expect(espion).toHaveBeenCalledWith('je', 'suis', 1, espion);
		expect(espion.mostRecentCall.args[0]).toBe('je');
		expect(espion).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(String), jasmine.any(Number), jasmine.any(Function));
	});

	describe("un peu plus d'espions", function() {

		var valeurExterne, objet;
		beforeEach(function() {
			valeurExterne = 0;
			objet = {
				fonction: function(value) {
					valeurExterne = value;
				}
			}
		});

		it("sur une vraie fonction", function() {
			//On peut aussi mocker une vraie fonction
			spyOn(objet, 'fonction');
			objet.fonction(1);
			expect(objet.fonction).toHaveBeenCalledWith(1);
			//Par contre la vraie fonction n'a pas été executée
			expect(valeurExterne).toBe(0);
		});

		it("sur une vraie fonction v2", function() {
			//On peut aussi mocker une vraie fonction en lui faisant renvoyer ce que l'on veut
			spyOn(objet, 'fonction').andReturn('hello');
			var result = objet.fonction(1);
			expect(result).toBe('hello');
			expect(objet.fonction).toHaveBeenCalledWith(1);
			//Par contre la vraie fonction n'a pas toujours pas été executée
			expect(valeurExterne).toBe(0);
		});

		it("avec un vrai appel", function() {
			//On peut aussi simplement espionner notre fonction
  		spyOn(objet, 'fonction').andCallThrough()
			objet.fonction(1);
			expect(objet.fonction).toHaveBeenCalledWith(1);
			expect(valeurExterne).toBe(1);		
		});
	});

	describe('À vous de jouer', function() {
		it('simple mock', function() {
			//Compléter ici
			var espion = undefined;

			expect(espion).toHaveBeenCalledWith(jasmine.any(String), 1);			
		});

		it('call through', function() {
			var objet = {
				maFonction: function(arg1, arg2) {
					return arg1 + arg2;
				}
			}			

			var result = objet.maFonction(1, '2');
			expect(objet.maFonction).toHaveBeenCalledWith( /**/ );
			expect(result).toBe( /**/ );
		});

	});
	
});

describe("ajax ? le pote d'Achille ?", function() {

	//On initialise jasmine-ajax pour mocker nos appels AJAX
	var callbacks, request, responseObject;
  var success, error, complete;

	beforeEach(function() {
		//On dit à jasmine de mocker toutes les requêtes AJAX
		jasmine.Ajax.useMock();

		//Utiliser ces méthodes pour les callbacks de $.ajax
		success = jasmine.createSpy("success");
		complete =  jasmine.createSpy("complete");
		error =  jasmine.createSpy("error");
	});

	it("A pour asynchrone", function() {
		//AJAX veut dire Asynchronous Javascript And XML
		//On ne sait pas quand la réponse à notre appel va arriver
		//On utilise donc des callbacks pour traiter le retour (succes ou erreur)

		$.ajax({
			url: "/nimp", //l'url de mon appel			

			//Les données envoyées
			data: {
				search: 'yop'
			},
	 			
			type: "GET", //Le type de la requête (généralement GET ou POST)
	 
			dataType : "json", //Le type de retour auquel on s'attend
	 
			success: function(result) {
				//Le code exécuté en cas de succès de la requête
			},
	 
			error: function( xhr, status ) {
				//Le code exécuté en cas d'erreur de la requête
			},
	 
			complete: function( xhr, status ) {
				//Le code exécuté quelque soit le résultat de la requête
				//C'est utile pour arrêter un spinner par exemple.
			}
		});  
	});

	describe("de vraies requête ajax", function() {
		it("une simple", function() {
			//Coder un $.ajax qui répond au test
			$.ajax( /**/ );

			request = mostRecentAjaxRequest();			
    	request.response({status: 200, responseText: "{}"});

			expect(request.url).toBe('/nimp');
			expect(request.method).toBe('POST');
			expect(success).toHaveBeenCalled();
			expect(complete).toHaveBeenCalled();
			expect(error).not.toHaveBeenCalled();
		});
	});

	
});

