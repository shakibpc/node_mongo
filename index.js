const express = require('express');


const app = express();
// const rootCall = (req, res) = res.send('Thank you')

app.get('/', (req, res) =>{
    res.send('I know how to open node. yee!!!');
})

app.listen(3000, () => console.log('Listening to port 3000'));  