function getPokemon(event){
    
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then( res => {
        return res.json()
    })
    .then( pokeData =>{
        return document.getElementById('pokeRes').innerHTML = pokeData.name;
    })
    .catch( err => {
        console.log(err)
    })
}

export { getPokemon }