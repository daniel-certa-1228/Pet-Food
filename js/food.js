console.log( "food.js" );

//petfood IIFE
var Petfood = (function () {

	return {
		//load dog food info from dogfood.json
		loadDogInfo: (callbackFunction) => {
			let dogLoader = new XMLHttpRequest();
			dogLoader.addEventListener("load", dogLoaderComplete);
			dogLoader.addEventListener("error", dogLoaderFailed);

			function dogLoaderComplete(event) {
				let dogObjects = [];
					console.log( "dog info has loaded" );
					//store parsed objects in dogObjects array
					dogObjects = JSON.parse(event.target.responseText);

					showDogFood(dogObjects);
			}

			function dogLoaderFailed(event) {
				console.log( "Dog Load Failed", responseText );
			}

			dogLoader.open("GET", "../json/dogfood.json");
			dogLoader.send();
		},
		//load cat food info from catfood.json
		loadCatInfo: (callbackFunction) => {
			let catLoader = new XMLHttpRequest();
			catLoader.addEventListener("load", catLoaderComplete);
			catLoader.addEventListener("error", catLoaderFailed);

			function catLoaderComplete(event) {
				let catObjects = [];
				console.log( "cat info has loaded" );
				//store parsed objects in catObjects array
				catObjects = JSON.parse(event.target.responseText);
				// console.log( "catObjects", catObjects );

				showCatFood(catObjects);
			}

			function catLoaderFailed(event) {
				console.log( "Cat Load Failed", responseText );
			}

			catLoader.open("GET", "../json/catfood.json")
			catLoader.send();
		}
		
	}
})();