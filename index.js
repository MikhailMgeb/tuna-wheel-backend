const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Это Express, а я - разработчик');
});

app.post('/wheel', (req, res) => {
    const symbols = req.body;
    const chosenSymbol = [];
    for (let i = 0; i < 3; i++) {
        const totalWeight = symbols.reduce((acc, symbol) => acc + symbol.weight, 0);
        let randomNumber = Math.random() * totalWeight;

        for (const symbol of symbols) {
            randomNumber -= symbol.weight;
            if (randomNumber <= 0) {
                chosenSymbol.push(symbol.symbol);
                break;
            }
        }
    }

    if (chosenSymbol[0] === chosenSymbol[1] && chosenSymbol[1] === chosenSymbol[2]) {
        const fruit = chosenSymbol[0];
        const point = {
            '🍒': 50,
            '🍋': 1000,
            '🍊': 400,
            '🍇': 200,
            '🍉': 25,
        }
        chosenSymbol.push(point[fruit]);
    }
    res.json(chosenSymbol);
})

app.listen(port, () => {
    console.log(`Приложение запущено и слушает порт ${port}`);
});
