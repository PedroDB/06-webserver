const http = require('http');

http.createServer((req, res) => {

        // res.writeHead(200, {'Content-Type': 'application/json'});
        // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
        // res.writeHead(200, {'Content-Type': 'application/csv'});



        res.write('Hola mundo');
        res.end();
        // res.write('1, Pedro\n');
        // res.write('2, Maria\n');
        // res.write('3, Juan\n');
        // res.write('4, Ramiro\n');
        // res.end();
    })
    .listen(3000);

    console.log('Escuchando en el puerto', 3000);