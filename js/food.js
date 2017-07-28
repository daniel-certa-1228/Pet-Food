console.log( "food.js" );

var Dogfood = (function () {

	return {
		loadDogInfo: (callbackFunction) => {
			let dogLoader = new XMLHttpRequest();
			dogLoader.addEventListener("load", dogLoaderComplete);
			dogLoader.addEventListener("error", dogLoaderFailed);

			function dogLoaderComplete(event) {
				let dogObjects = [];
				let dogBrands = [];
				let types = [];
					console.log( "dog info has loaded" );
					dogObjects = JSON.parse(event.target.responseText);
					console.log( "dogObjects", dogObjects );
					// console.log( "dogBrands", dogBrands );
					// for (let key in dogObjects) {
					// 	// console.log( "[key]", dogObjects[key] );
					// 	for (let key2 in dogObjects[key]) {
					// 		// console.log( "[key2]", dogObjects[key][key2] );
					// 		for (let key3 in dogObjects[key][key2]) {
					// 			// console.log( "[key3]", dogObjects[key][key2][key3].name );
					// 			// dogBrands.push(dogObjects[key][key2][key3].name);
					// 			// console.log( "dogBrands", dogBrands );
					// 			for (let key4 in dogObjects[key][key2][key3]) {
					// 				// console.log( "[key4]", dogObjects[key][key2][key3][key4] );
					// 				for ( let key5 in dogObjects[key][key2][key3][key4] ) {
					// 					console.log( "[key5]", dogObjects[key][key2][key3][key4][key5] );

					// 					for (let key6 in dogObjects[key][key2][key3][key4][key5]) {
					// 						// console.log( "[key6]", dogObjects[key][key2][key3][key4][key5][key6] );
					// 						for (let key7 in dogObjects[key][key2][key3][key4][key5][key6]) {
					// 							// console.log( "[key7]", dogObjects[key][key2][key3][key4][key5][key6][key7]);
					// 						}
					// 					}
					// 				}
					// 			}
					// 		}
					// 	}
					// }
			}

			function dogLoaderFailed(event) {
				console.log( "Dog Load Failed", responseText );
			}

			dogLoader.open("GET", "../json/dogfood.json");
			dogLoader.send();
		}
	}

})();

Dogfood.loadDogInfo()