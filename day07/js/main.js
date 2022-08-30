for(let i = 0; i < 10; i++) {
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Hello World';
    document.body.appendChild(h1);
    h1.addEventListener('click', () => {
        h1.style.color = 'red';
    });
}