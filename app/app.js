const translate = require('translate-google')
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 4000;

const app = express();
app.use(cors());

app.get('/translate', async (req, res) => {
    const { message, to } = req.query;
    const result = await translate(message, { to });
    res.send({ text: result });
});

app.listen(port, () =>
  console.log(`Application listening on port ${port}!`),
);
