alert('test')

console.log(document.forms);
document.forms[0].addEventListener('submit', (event) => {
    event.preventDefault();
    createNewSuperHero();
});

function getSuperHeroes() {
    fetch('/superheroes')
        .then(response => response.json())
        .then(data => console.log(data));
}
function createNewSuperHero() {
    fetch('/superheroes',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: document.forms.super.name.value })
    } )
        .then(response => response.json())
        .then(data => console.log(data));
}

document.forms.super.name.addEventListener('input', (event) => {
    console.log(document.forms.super.valid);
    console.log('terms', document.forms.super.terms.checked);
    const isValid = document.forms.super.name.checkValidity() && document.forms.super.terms.checked;
    if (isValid) {
        console.log('is a valid name')

    } else {
        console.log('is not a valid name')
    }

})

