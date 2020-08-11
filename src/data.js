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

export const pokemonTypes = (setData, orderType) => {
  let filtering = setData.filter((pokemon) => {
    const tiposArr = pokemon.type;
    return tiposArr.includes(orderType);
  });
  return filtering;
};
