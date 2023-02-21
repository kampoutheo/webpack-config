const elvenShieldRecipe = {
   leatherStrips : 2,
   ironIngot: 1,
   refinedMoonstone: 4,
};

const elvenGauntlesRecipe = {
   ... elvenShieldRecipe,
   leather: 1,
   refinedMoonstone:4,
}

console.log(elvenShieldRecipe);

console.log(elvenGauntlesRecipe);