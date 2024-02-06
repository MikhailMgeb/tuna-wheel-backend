const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Это Express, а я - разработчик');
});

app.post('/sort', (req, res) => {
    const fact = req.body;

    res.send('Вернуть самое большое число');
})

app.listen(port, () => {
    console.log(`Приложение запущено и слушает порт ${port}`);
});