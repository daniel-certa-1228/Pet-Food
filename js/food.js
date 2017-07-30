console.log( "food.js" );

var Petfood = (function () {

	return {
		loadDogInfo: (callbackFunction) => {
			let dogLoader = new XMLHttpRequest();
			dogLoader.addEventListener("load", dogLoaderComplete);
			dogLoader.addEventListener("error", dogLoaderFailed);

			function dogLoaderComplete(event) {
				let dogObjects = [];
				let dogBrands = [];
				let dogFoodType = [];
				let dogFoodSize = [];
				let dogFoodPrice = [];
				// let types = [];
					console.log( "dog info has loaded" );
					dogObjects = JSON.parse(event.target.responseText);
					console.log( "dogObjects", dogObjects );

					for (let i = 0; i < dogObjects[0].dog_brands.length; i++) {
						dogBrands.push(dogObjects[0].dog_brands[i].name);	

						for (let j = 0; j < dogObjects[0].dog_brands.length; j++) {
							dogFoodType.push(dogObjects[0].dog_brands[i].types[j].type);

							for (let k = 0; k < dogObjects[0].dog_brands[i].types.length; k++) {
								dogFoodSize.push(dogObjects[0].dog_brands[i].types[j].volumes[k].name);
								dogFoodPrice.push(dogObjects[0].dog_brands[i].types[j].volumes[k].price);
							};
						};

					};
					console.log( "dogBrands", dogBrands );
					console.log( "dogFoodType", dogFoodType );
					console.log( "dogFoodSize ", dogFoodSize );
					console.log( "dogFoodPrice", dogFoodPrice );

					// let brand1 = dogObjects[0].dog_brands[0].name;
					// console.log( "brand1", brand1 );
					// let brand2 = dogObjects[0].dog_brands[1].name;
					// console.log( "brand2", brand2 );
			}

			function dogLoaderFailed(event) {
				console.log( "Dog Load Failed", responseText );
			}

			dogLoader.open("GET", "../json/dogfood.json");
			dogLoader.send();
		},

		loadCatInfo: (callbackFunction) => {
			let catLoader = new XMLHttpRequest();
			catLoader.addEventListener("load", catLoaderComplete);
			catLoader.addEventListener("error", catLoaderFailed);

			function catLoaderComplete(event) {
				let catObjects = [];
				let catBrands = [];
				let catFoodBreed = [];
				let catFoodTypes = [];
				console.log( "cat info has loaded" );
				catObjects = JSON.parse(event.target.responseText);
				console.log( "catObjects", catObjects );

				for (let i = 0; i < catObjects[0].cat_brands.length; i++) {
					catBrands.push(catObjects[0].cat_brands[i].name);

					// for (let j = 0; j < catObjects[0].cat_brands.length; j++) {
					// 	catFoodBreed.push(catObjects[0].cat_brands[i].breeds[j].breed);

						// for (let k = 0; k < catObjects[0].cat_brands[i].breeds.length; k++) {
						// catFoodTypes.push(catObjects[0].cat_brands[i].breeds[j].types);
						// };
					// };
				};
				console.log( "catBrands", catBrands );
				console.log( "catFoodBreed", catFoodBreed );
				console.log( "catFoodTypes", catFoodTypes );

			}

			function catLoaderFailed(event) {
				console.log( "Cat Load Failed", responseText );
			}

			catLoader.open("GET", "../json/catfood.json")
			catLoader.send();
		}
		
	}

})();






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