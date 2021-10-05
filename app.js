require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT;

//TODO: cambiar hbs por ejs, hacer partials de estos mismos 
app.set('view engine', 'ejs');

//Sevir contenido estatico
app.use(express.static('public'));


// app.get('/hola-mundo', (req, res) => {
//     res.send('Hola mundo en su respectiva ruta');
// });

// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/public/404.html');
// });

app.get('/', (req,res)=>{
    res.render('home',{
        nombre: 'Pedro Diaz',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req,res)=>{
    res.render('generic',{
        titulo: 'Curso de Node',
        nombre: 'Pedro Diaz'
    });
});

app.get('/elements', (req,res)=>{
    res.render('elements',{
        titulo: 'Curso de Node',
        nombre: 'Pedro Diaz'
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});