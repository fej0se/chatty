import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({
        message: 'informação recebida do servidor'
    })
})

app.post('/', (req, res) => {
    return res.json({
        message: 'informação gravada no servidor'
    })
})

app.listen(3333, () => console.log('server is running'))