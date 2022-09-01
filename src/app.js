import dayjs from 'dayjs';
import express from 'express';

const app = express();

//TODO: Ajouter du code ici

app.get('/deuxieme', (req, res) => {
    res.status(200)
    res.set('Content-Type','text/plain');
    res.send('Première route avec express');
});

app.get('/date', (req, res) => {
    res.status(200);
    res.set('Content-Type','text/plain');
    const today = dayjs();
    res.send(today.format());
});

app.get('/maths/:operation', (req, res) => {
    const a = parseInt(req.query.a, 10);
    const b = parseInt(req.query.b, 10);
    
    const operation = req.params.operation;
    let result = 0;

    switch(operation) {
        case 'somme':
            result = a + b;
            break;
        case 'difference':
            result = a - b;
            break;
        case 'produit':
            result = a * b;
            break;
        case 'quotient':
            result = a / b;
            break;
        case 'reste':
            result = b % a;
            break;
        default :
            result = 'Opération non définie'
    }    
    
    res.status(200);
    res.set('Content-Type', 'text/plain');
    res.send(result.toString());
})

export default app;