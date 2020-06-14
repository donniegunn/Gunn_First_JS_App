var pokemonRepository = (function () {
   //pokemon array
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

 function add(item) {
    pokemonList.push(item);
  }

  function getAll() {
    return pokemonList;
  }

   function addListItem (pokemon){
    var domList = document.querySelector('.pokemon-list');
    var listItem = document.createElement('li');
    var button = document.createElement('button');
    button.innerText = (.pokemon.name);
    button.classList.add('new-button-class'); 
    pokemon-list.appendChild(button);
    pokemon-list.appendChild(li);}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };

})();

// Add additional pokemon
pokemonRepository.add({ name: 'Charmander' });

//output pokemon list
pokemonRepository.getAll().forEach(loopFunction);

function loopFunction(attributes) {
 var domList = document.querySelector('.pokemon-list');
 var listItem = document.createElement('li');
 var button = document.createElement('button');
 button.innerText = (.attributes.name);
 button.classList.add('new-button-class'); 
 pokemon-list.appendChild(button);
 pokemon-list.appendChild(li);
}

var button = document.querySelector('button');
button.addEventListener('click', function (event) {
  console.log(event);
});


