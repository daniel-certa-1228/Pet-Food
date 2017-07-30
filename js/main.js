console.log( "main.js" );

let dogFoodDiv = document.getElementById("dog-food");
let catFoodDiv = document.getElementById("cat-food");
let dogFoodCard = `<article class="card">
				<header><h2>Dog Food</h2></header>
				`
let catFoodCard = `<article class="card">
				<header><h2>Cat Food</h2></header>
				`

function showDogFood(dogObjects){
	// console.log( "dogObjects", dogObjects );
	let dogFoodBrands = dogObjects[0].dog_brands;
	// console.log( "dogFoodBrands", dogFoodBrands );

	for (let i = 0; i < dogObjects[0].dog_brands.length; i++) {
		dogFoodCard += `<h3>${dogFoodBrands[i].name}</h3>`;

		for (let j = 0; j < dogFoodBrands[i].types.length; j++) {

			for (let k = 0; k < dogFoodBrands[i].types[j].volumes.length; k++) {

			dogFoodCard  += `<h4>${dogFoodBrands[i].types[j].type}</h4>
							  <p>${dogFoodBrands[i].types[j].volumes[k].name} Bag - <span class="price">$${dogFoodBrands[i].types[j].volumes[k].price}</span></p>`;

			}

		}

	};

	dogFoodDiv.innerHTML += dogFoodCard;

};

function showCatFood(catObjects){
	console.log( "catObjects", catObjects );

	let catFoodBrands = catObjects[0].cat_brands;
	console.log( "catFoodBrands", catFoodBrands );





	catFoodDiv.innerHTML += catFoodCard;
}

Petfood.loadDogInfo(showDogFood)
Petfood.loadCatInfo(showCatFood)






//Loop Graveyard
///////////////////////////////////////////////////////////////////////////

					// for (let i = 0; i < dogObjects[0].dog_brands.length; i++) {
					// 	dogBrands.push(dogObjects[0].dog_brands[i].name);	

					// 	for (let j = 0; j < dogObjects[0].dog_brands.length; j++) {
					// 		dogFoodType.push(dogObjects[0].dog_brands[i].types[j].type);

					// 		for (let k = 0; k < dogObjects[0].dog_brands[i].types.length; k++) {
					// 			dogFoodSize.push(dogObjects[0].dog_brands[i].types[j].volumes[k].name);
					// 			dogFoodPrice.push(dogObjects[0].dog_brands[i].types[j].volumes[k].price);
					// 		};
					// 	};

					// };
					// console.log( "dogBrands", dogBrands );
					// console.log( "dogFoodType", dogFoodType );
					// console.log( "dogFoodSize ", dogFoodSize );
					// console.log( "dogFoodPrice", dogFoodPrice );

					// let brand1 = dogObjects[0].dog_brands[0].name;
					// console.log( "brand1", brand1 );
					// let brand2 = dogObjects[0].dog_brands[1].name;
					// console.log( "brand2", brand2 );



				// for (let i = 0; i < catObjects[0].cat_brands.length; i++) {
				// 	catBrands.push(catObjects[0].cat_brands[i].name);

				// 	// for (let j = 0; j < catObjects[0].cat_brands.length; j++) {
				// 	// 	catFoodBreed.push(catObjects[0].cat_brands[i].breeds[j].breed);

				// 		// for (let k = 0; k < catObjects[0].cat_brands[i].breeds.length; k++) {
				// 		// catFoodTypes.push(catObjects[0].cat_brands[i].breeds[j].types);
				// 		// };
				// 	// };
				// };
				// console.log( "catBrands", catBrands );
				// console.log( "catFoodBreed", catFoodBreed );
				// console.log( "catFoodTypes", catFoodTypes );






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