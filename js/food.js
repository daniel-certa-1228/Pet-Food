console.log( "food.js" );

var Dogfood = (function () {

	return {
		loadDogInfo: (callbackFunction) => {
			let dogLoader = new XMLHttpRequest();
			dogLoader.addEventListener("load", dogLoaderComplete);
			dogLoader.addEventListener("error", dogLoaderFailed);

			function dogLoaderComplete(event) {
				let dogObjects = [];
					console.log( "dog info has loaded" );
					dogObjects = JSON.parse(event.target.responseText);
					console.log( "dogObjects", dogObjects );
			}

			function dogLoaderFailed(event) {
				console.log( "Dog Load Failed", responseText );
			}

			dogLoader.open("GET", "../json/dogfood.json");
			dogLoader.send();
		}



	}


})();