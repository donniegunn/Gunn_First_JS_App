
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

for ( let i = 0; i < pokemonList.length; i++ ) {
	document.write ( '<u>' + '<h3>' + pokemonList[i].name + '</h3>' + '</u>' + " " + 'Height:' + " " + pokemonList[i].height + " " )
if (pokemonList[i].height >= 5.0) {
	document.write ( '<i>' + '<b>' +  'Wow that\'s big!' + '</i>' + '</b>' )
  }
}
