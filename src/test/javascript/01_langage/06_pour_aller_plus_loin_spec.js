
describe("Pour aller plus loin", function() {

	it("mettre en cache le résultat d'une fonction", function() {
		function isPrime( num ) {
			if ( isPrime.cache[ num ] != null ) {
				return isPrime.cache[ num ];
			}

			var prime = num != 1; // Everything but 1 can be prime
			for ( var i = 2; i < num; i++ ) {
				if ( num % i == 0 ) {
					prime = false;
					break;
				}
			}

			isPrime.cache[ num ] = prime

			return prime;
		}

		isPrime.cache = {};

		//Modifiez la méthode au dessus pour faire passer les tests
		expect(isPrime(5)).toBeTruthy();
		expect(isPrime.cache[5]).toBeTruthy();
	});

	it("Parlons contexte", function() {
		//Hint : encore utilisez la méthode apply : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
		var object = {};
		function fn() {
			return this;
		}

		//Changez le contexte d'appel de fn par object
		expect(fn.apply(object)).toBe(object);
	})

	it("looooooop", function() {
		//Hint : encore apply/call
		function loop(array, fn) {
			for ( var i = 0; i < array.length; i++ ) {
				fn.call( array, array[i], i );
			}
		}

		var num = 0;
		loop([0, 1, 2], function(value) {
			expect(value).toBe(num);
			expect(this instanceof Array).toBeTruthy();

			num++;
		});
	});

	it("je change de nom", function() {
		function Ninja(name) {
			this.changeName(name);
		}
		Ninja.prototype.changeName = function(name) {
			this.name = name;
		}

		var ninja = new Ninja("John");
		expect(ninja.name).toBe("John");

		ninja.changeName("Bob");
		expect(ninja.name).toBe("Bob");
	});

	it("avec ou sans new", function() {
		function User(first, last) {
			if ( !(this instanceof User) ) {
				return new User(first, last);
			}

			this.name = first + " " + last;
		}

		var name = "Resig";
		var user = User("John", name);

		expect(user instanceof User).toBeTruthy();
		expect(name).toBe("Resig");
	});

	it("min ou max sur un tableau", function() {
		function smallest(array) {
			return Math.min.apply(Math, array);
		}

		expect(Math.min(0, 1, 2, 3)).toBe(0);
		expect(Math.min([0, 1, 2, 3])).toBeNaN();
		expect(smallest([0, 1, 2, 3])).toBe(0);
	});

	it("sur les closures", function() {
		var a = 5;
		function runMe(a) {
			expect(a).toBe(6);

			function innerRun(){
				expect(b).toBe(7);
				expect(c).toBe(undefined);
			}

			var b = 7;
			innerRun();
			var c = 8;
		}
		runMe(6);
	});

	it("un effet de bord", function() {
		setFixtures('<div id="results"></div>');

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
		expect(elem.clicked).toBeTruthy();
	});

	it("coder un bind", function() {
		setFixtures('<div id="results"></div>');

		//Hint : il faut utiliser apply
		//Hint 2 : une fonction d'un objet est une propriété
		function bind(context, name) {
			return function(){
				return context[name].apply(context, arguments);
			};
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
		setFixtures('<div id="results"></div>');

		Function.prototype.bind = function(object){
			var fn = this;
			return function(){
				return fn.apply(object, arguments);
			};
		};

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
