import express from 'express';
import path from 'path';

const __dirname = path.resolve();

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
const superHeroes = [
    { name: 'Batman' },
    { name: 'Superman' },
    { name: 'Spiderman' },
    { name: 'Ironman' },
    { name: 'Hulk' },
    { name: 'Thor' },
    { name: 'Captain America' },
    { name: 'Wolverine' },
    { name: 'Deadpool' },
];

app.get('/superheroes', (req, res) => {
    res.json(superHeroes);
});

app.post('/superheroes', (req, res) => {
    console.log(req.body);
    superHeroes.push(req.body);
    res.json({ message: 'Superhero created' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});