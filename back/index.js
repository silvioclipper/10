const express = require('express');

const app = express();

app.use(express.json());
app.post('/users', (request, response) => {
    console.log(request.query);
    console.log(request.params); 
    console.log(request.body)
    return response.json({message: 'Mensagem'})
})

app.listen(3333, () => {
    console.log('O servidor está rodando...')
});