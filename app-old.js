
const http = require('http');


http.createServer ( (req, res ) =>{
    
   
   
   

    res.write('Hola Mundo');
   
    res.end();
    /*
     res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-type': 'application/cdv' });
    res.write('id, nombre\n');
    res.write('3, Juan\n');
    res.write('1, Fernando\n');
    res.write('2, Maria\n');
    res.write('4, Pedro\n');
   */
    


})
.listen ( 8080 );

console.log('Escuchando el puerto', 8080 );