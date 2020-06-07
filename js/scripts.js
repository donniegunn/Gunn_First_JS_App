
var pokemonRepository = (function () {
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
  }];

  return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    }
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Charmander' });
Object.keys(pokemonRepository.getAll()).forEach(function(attributes) {
console.log(pokemonRepository.getAll()[attributes]);
});

function loopFunction(pokemon) {
  	document.write ( '<u>' + '<h3>' + pokemon.name + '</h3>' + '</u>' + " " + 'Height:' + " " + pokemon.height + " ");
  	if (pokemon.height >= 5.0) {
	document.write ( '<i>' + '<b>' +  'Wow that\'s big!' + '</i>' + '</b>' );
	}
}
pokemonRepository.getAll().forEach(loopFunction);