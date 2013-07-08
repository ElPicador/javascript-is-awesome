//http://learn.jquery.com/ajax/
describe("ajax ? le pote d'Achille ?", function() {

	//On initialise jasmine-ajax pour mocker nos appels AJAX
	var callbacks, request, responseObject;
  var success, error, complete;

	beforeEach(function() {
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
			//Code un $.ajax qui répond au test
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

