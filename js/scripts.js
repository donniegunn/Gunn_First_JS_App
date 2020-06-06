
var pokemonList = [
  {
   name : 'Lugia',
   height : 5.2,
   types : ['Psychic', 'Flying'],
  },
  {
   name : 'Machamp',
   height : 1.06,
   types : ['Grass'],
  },
  {
   name : 'Nuzleaf',
   height : 1.0,
   types : ['Dark', 'Grass'],
  }
];

function loopFunction(pokemon) {
  	document.write ( '<u>' + '<h3>' + pokemon.name + '</h3>' + '</u>' + " " + 'Height:' + " " + pokemon.height + " " );
  	if (pokemon.height >= 5.0) {
	document.write ( '<i>' + '<b>' +  'Wow that\'s big!' + '</i>' + '</b>' );
	}
}
pokemonList.forEach(loopFunction);



