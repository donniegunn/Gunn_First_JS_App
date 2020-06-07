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
  }
];

  function getAll() {
    return pokemonList;
  }

function add(pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    add: add,
    getAll: getAll
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Charizard' });
console.log(pokemonRepository.getAll()); 


function loopFunction() {
  	document.write ( '<u>' + '<h3>' + pokemonRepository.getAll.name + '</h3>' + '</u>' + " " + 'Height:' + " " + pokemonRepository.getAll.height + " " );
  	if (pokemonRepository.getAll.height >= 5.0) {
	document.write ( '<i>' + '<b>' +  'Wow that\'s big!' + '</i>' + '</b>' );
	}
}

pokemonRepository.getAll.forEach(loopFunction);
