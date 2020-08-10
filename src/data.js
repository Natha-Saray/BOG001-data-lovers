// // estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

// FUNCIONES
// estas funciones son de ejemplo

// export const filter = () => {

//   Array.prototype.filter()

//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

// si comento este codigo, el boto de la 2da ventana no funciona
export const orderSort = (setData, order) => {
  let sorting = setData.sort(function (a, z) {
    if (a.name > z.name) {
      return 1;
    } else {
      return -1;
    }
  });
  if (order === "Z-A") {
    sorting.reverse();
  }
  return sorting;
};

// export function filterType(data, type) {
//   const typesPokemon = data.filter((pokemon) => {
//     return pokemon.type[0] === type || pokemon.type[1] === type;
//   });
//   return typesPokemon;
// }

export const pokemonTypes = (setData, orderType) => {
	let filtering = setData.filter((type) => {		
		switch (orderType) {
			case "grass":
				"grass".type === "Grass";
				break;
			case "poison":
				"poison".type === "Poison";
				break;
			case "fire":
				"fire".type === "Fire";
				break;
			case "flying":
				"flying".type === "Flying";
				break;
			case "water":
				"water".type === "Water";
				break;
			case "bug":
				"bug".type === "Bug";
				break;
			case "fighting":
				"fighting".type === "Fighting";
				break;
			case "electric":
				"electric".type === "Electric";
				break;
			case "ice":
				"ice".type === "Ice";
				break;
			case "psychic":
				"psychic".type === "Psychic";
				break;
			case "ground":
				"ground".type === "Ground";
				break;
			case "rock":
				"rock".type === "Rock";
				break;
			case "dragon":
				"dragon".type === "Dragon";
				break;
			case "ghost":
				"ghost".type === "Ghost"; 
				break;
			default:
				"grass".type === "Grass";
		}

	})
}