function createNavBar() {
    const navBar = {
        brand: 'My Company',
        backgroundColor: 'beige',
        links: [
            {
                name: 'Home',
                href: '/'
            },
            {
                name: 'About',
                href: '/about'
            },
            {
                name: 'Contact',
                href: '/contact'
            },
            {
                name: 'Map',
                href: '/map'
            }
        
        ],
            profile: {
                name: 'Please Login',
                image: 'https://placeimg.com/64/64/any'
            },
            element: document.createElement('nav'),
            render() {
                document.body.prepend(this.element);
                this.element.innerHTML = '';
                const logo = document.createElement('a');
                logo.innerText = this.brand;
                logo.href = '/';
                this.element.appendChild(logo);
                this.element.style.backgroundColor = this.backgroundColor;
                this.element.style.padding = '20px';
                this.element.style.display = 'flex';
                this.element.style.justifyContent = 'space-between';
                this.links.forEach(link => {
                    const a = document.createElement('a');
                    a.innerText = link.name;
                    a.href = link.href;
                    this.element.appendChild(a);
                });
                const profile = document.createElement('div');
                profile.innerText = this.profile.name;
                this.element.appendChild(profile);
            },

            login(name){
                this.profile.name = name;
                this.render();
            }
    }
    return navBar;
}




document.addEventListener('click', event => {
    navBar.login(prompt('Username'));
});

function createNowPlaying() {
    const nowPlaying = {
        title: 'Now Playing',
        element: document.createElement('section'),
        movies: [
            {
                name: 'The Shawshank Redemption',
                year: 1994,
                rating: 9.3,
            },
            {
                name: 'The Godfather',
                year: 1972,
                rating: 9.2,
            },
            {
                name: 'The Godfather: Part II',
                year: 1974,
                rating: 9.0,
            }
        ],
        render() {
            console.log(this.element)
            document.body.appendChild(this.element);
            const h1 = createElement('h1');
            updateElementText(h1, this.title);
            placeElementPage(h1, this.element);
            const ul = createElement('ul');
            this.movies.forEach(movie => {
                const li = createElement('li');
                li.innerText = `${movie.name} - ${movie.year} - ${movie.rating}`;
                ul.appendChild(li);
            });
            this.element.appendChild(h1);
            this.element.appendChild(ul);

        }
    }
    return nowPlaying;
}


function createUpcoming() {
    const nowPlaying = {
        title: 'Upcoming'.toUpperCase(),
        element: document.createElement('section'),
        movies: [
            {
                name: 'The Dark Knight',
                year: 2008,
            },
            {
                name: 'Matrix Revolutions',
                year: 1999,
            },
        ],
        render() {
            console.log(this.element)
            document.body.appendChild(this.element);
            const h1 = document.createElement('h1');
            h1.style.textAlign = 'center';
            updateElementText(h1, this.title);
            this.element.appendChild(h1);
            updateElementStyle(h1, 'fontSize', '3rem');
            const ul = document.createElement('ul');
            this.movies.forEach(movie => {
                const li = document.createElement('li');
                li.innerText = `${movie.name} - ${movie.year} - ${movie.rating}`;
                ul.appendChild(li);
            });
            this.element.appendChild(h1);
            this.element.appendChild(ul);

        }
    }
    return nowPlaying;
}

const navBar = createNavBar();
navBar.render();
const nowPlaying = createNowPlaying();
nowPlaying.render();
const upcoming = createUpcoming();
upcoming.render();

function createElement(type) {
    return document.createElement(type);
}

function placeElementPage(element, parent){
    parent.appendChild(element);
}

function updateElementText(elemnt, text){
    elemnt.innerText = text;
}
function updateElementHtml(element, html){
    element.innerHTML = html;
}
function updateElementStyle(element, styleName, styleValue){
    element.style[styleName] = styleValue;
}
function updateElementClass(element, className){
    element.classList.add(className);
}
function removeElementClass(element, className){
    element.classList.remove(className);
}
function removeElement(element){
    element.remove();
}

const title = createElement('h1');
placeElementPage(title, document.body);
updateElementText(title, 'My Company');
updateElementStyle(title, 'color', 'red');
updateElementClass(title, 'big');
removeElementClass(title, 'big');
removeElement(title);
