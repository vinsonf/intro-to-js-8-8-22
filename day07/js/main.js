for(let i = 0; i < 2; i++) {
    const h1 = document.createElement('h1'); 
    h1.innerHTML = 'Hello World';
    document.body.appendChild(h1);
    h1.addEventListener('click', () => {
        h1.style.color = 'red';
    });
}

fetch('http://pokeapi.co/api/v2/pokemon/').then((response) => {
    return response.json();
}).then((data) => {
    data.results.forEach((pokemon) => {
        const h1 = document.createElement('h1');
        h1.innerText = pokemon.name;
        document.body.appendChild(h1);
    });
})
