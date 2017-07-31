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

	for (let i = 0; i < dogFoodBrands.length; i++) {
		dogFoodCard += `<h3>${dogFoodBrands[i].name}</h3>`;

		for (let j = 0; j < dogFoodBrands[i].types.length; j++) {

			for (let k = 0; k < dogFoodBrands[i].types[j].volumes.length; k++) {

			dogFoodCard  += `<h4>${dogFoodBrands[i].types[j].type}</h4>
							  <p>${dogFoodBrands[i].types[j].volumes[k].name} Bag - <span class="price">$${dogFoodBrands[i].types[j].volumes[k].price}</span></p>`;

			}

		}

	};

	dogFoodCard  += `</article>`;
	dogFoodDiv.innerHTML += dogFoodCard;

};

function showCatFood(catObjects){
	// console.log( "catObjects", catObjects );

	let catFoodBrands = catObjects[0].cat_brands;
	// console.log( "catFoodBrands", catFoodBrands );

	for (let i = 0; i < catFoodBrands.length; i++) {

		catFoodCard += `<h3>${catFoodBrands[i].name}</h3>`;

		for (let j = 0; j < catFoodBrands[i].breeds.length; j++) {

			catFoodCard += `<h4 class="breed">${catFoodBrands[i].breeds[j].breed}</h4>`

			for (let k = 0; k < catFoodBrands[i].breeds[k].types.length; k++) {
				catFoodCard += `<h4>${catFoodBrands[i].breeds[j].types[k].type}</h4>`

				for (let l = 0; l < catFoodBrands[i].breeds[j].types[k].volume.length; l++) {
					catFoodCard += `<p>${catFoodBrands[i].breeds[j].types[k].volume[l].name} Bag - <span class="price">$${catFoodBrands[i].breeds[j].types[k].volume[l].price}</span><p>`
				};

			};
		};
	};

	catFoodCard += `</article>`
	catFoodDiv.innerHTML += catFoodCard;
}

Petfood.loadDogInfo(showDogFood)
Petfood.loadCatInfo(showCatFood)
