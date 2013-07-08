
describe("Pour aller plus loin", function() {
	
	it("mettre en cache le résultat d'une fonction", function() {
		//Hint : utiliser les propriétés

		function isPrime( num ) { 
			var prime = (num != 1); // Everything but 1 can be prime 
			for ( var i = 2; i < num; i++ ) { 
				if ( num % i == 0 ) { 
					prime = false; 
					break; 
				} 
			} 
			return prime; 
		}

		//Modifiez la méthode au dessus pour faire passer les tests
		expect(isPrime(5)).toBeTruthy();
		expect(isPrime.cache[5]).toBeTruthy();
	});

	it("Parlons contexte", function() {
		//Hint : encore utilisez la méthode apply : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
		var object = {}; 
		function fn(){ 
			return this; 
		}

		//Faites passer les tests
		expect(fn()).toBe( /**/ );

		//Changez le contexte d'appel de fn par object
		expect( /**/ ).toBe( object );
	})

	it("looooooop", function() {
		//Hint : encore apply
		function loop(array, fn){ 
			for ( var i = 0; i < array.length; i++ ) { 
				// Implementez la méthode pour faire passer les tests
			} 
		} 

		var num = 0; 
		loop([0, 1, 2], function(value){ 
			expect(value).toBe(num);
			expect(this instanceof Array).toBeTruthy();

			num++;
		});
	});

	it("je change de nom", function() {
		function Ninja(name){ 
			// Implement meeee! 
		} 
		 
		var ninja = new Ninja("John"); 
		expect(ninja.name).toBe("John");
		 
		ninja.changeName("Bob"); 
		expect(ninja.name).toBe("Bob");
	});

	it("avec ou sans new", function() {
		function User(first, last){ 
			//Coder ici
			 
			this.name = first + " " + last; 
		} 
		 
		var name = "Resig"; 
		var user = User("John", name); 
		 
		expect(typeof user).toBe(User);
		expect(name).toBe("Resig");
	});

	it("min ou max sur un tableau", function() {
		function smallest(array) { 
			//Code ici, ça doit faire une seule ligne et utiliser Math.min
		} 

		expect(Math.min(0, 1, 2, 3)).toBe(0);
		expect(Math.min([0, 1, 2, 3])).toBe(NaN);
		expect(smallest([0, 1, 2, 3])).toBe(0);
	});

	it("sur les closures", function() {
		var a = 5; 
		function runMe(a) {
			expect(a).toBe( /**/ ); 
		 
			function innerRun(){ 
				expect(b).toBe( /**/ );
				expect(c).toBe( /**/ );
			} 

			var b = 7; 
			innerRun(); 
			var c = 8; 
		} 
		runMe(6); 
		 
		for ( var d = 0; d < 3; d++ ) { 
			setTimeout(function(){ 
				expect(d).toBe( /**/ );
			}, 100); 
		}
	});

	it("un effet de bord", function() {
		var Button = { 
			click: function(){ 
				this.clicked = true; 
			} 
		}; 
		 
		var elem = document.createElement("li"); 
		elem.innerHTML = "Click me!"; 
		elem.onclick = Button.click; 
		document.getElementById("results").appendChild(elem); 
		 
		elem.onclick(); 
		expect(elem.clicked).toBe( /**/ );
	});

	it("coder un bind", function() {
		//Hint : il faut utiliser apply
		//Hint 2 : une fonction d'un objet est une propriété
		function bind(context, name) { 
			//Coder ici
		} 
		 
		var Button = { 
		  click: function(){ 
		    this.clicked = true; 
		  } 
		}; 
		 
		var elem = document.createElement("li"); 
		elem.innerHTML = "Click me!"; 
		elem.onclick = bind(Button, "click"); 
		document.getElementById("results").appendChild(elem); 
		 
		elem.onclick(); 
		expect(Button.clicked).toBeTruthy();
		expect(elem.clicked).toBe(undefined);
	});

	it("un plus joli bind", function() {
		//Hint : Enrichir le propotype de Function
		//Hint 2 : Encore du apply

		var Button = {
		  click: function(){
		    this.clicked = true;
		  }
		};

		var elem = document.createElement("li");
		elem.innerHTML = "Click me!";
		elem.onclick = Button.click.bind(Button);
		document.getElementById("results").appendChild(elem);

		elem.onclick();
		expect(Button.clicked).toBeTruthy();
	});
});
