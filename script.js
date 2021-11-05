let animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

let food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

let universes = [
	['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
	['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]

//Первая таблица - животные

function getInfo(animals, animalTable) {
	let arrAnimals = animals.slice();
	
	arrAnimalsOutput = [];
	for(let i = 0; i<arrAnimals.length; i++) {
		arrAnimalsOutput.push(`<tr>
		<td>${arrAnimals[i][0]}</td>
		<td>${arrAnimals[i][1]}</td>
		<td>${arrAnimals[i][2]}</td>
		<td>${arrAnimals[i][3]}</td>
		<td>${arrAnimals[i][4]}</td>
		</tr>`);
	}
		
	return `<table border="1">
	<caption>${animalTable} info</caption>
		<tbody>${arrAnimalsOutput}</tbody>
		</table>`	
}

document.write(getInfo(animals, "Animals"));

//Вторая таблица - еда

function getInfo(food, foodTable) {
	let arrFood = food.slice();
	
	arrFoodOutput = [];
	for(let i = 0; i<arrFood.length; i++) {
		arrFoodOutput.push(`<tr>
		<td>${arrFood[i][0]}</td>
		<td>${arrFood[i][1]}</td>
		<td>${arrFood[i][2]}</td>
		<td>${arrFood[i][3]}</td>
		<td>${arrFood[i][4]}</td>
		</tr>`);
	}
		
	return `<table border="1">
	<caption>${foodTable} info</caption>
		<tbody>${arrFoodOutput}</tbody>
		</table>`	
}

document.write(getInfo(food, "Food"));

//Третья таблица - герои

function getInfo(universes, universesTable) {
	let arrUniverses = universes.slice();
	
	arrUniversesOutput = [];
	for(let i = 0; i<arrUniverses.length; i++) {

		if(Array.isArray(arrUniverses[i][2])){
            let x = arrUniverses[i][2]
            x = x.join("; ")
            arrUniverses[i][2] = x;
        }

		arrUniversesOutput.push(`<tr>
		<td>${arrUniverses[i][0]}</td>
		<td>${arrUniverses[i][1]}</td>
		<td>${arrUniverses[i][2]}</td>
		</tr>`);
	}
		
	return `<table border="1">
	<caption>${universesTable} info</caption>
		<tbody>${arrUniversesOutput.join(``)}</tbody>
		</table>`	
}

document.write(getInfo(universes, "Universes"));