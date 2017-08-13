// npm install --save serve-static
// npm instll --save express

const express = require('express');
const app = express();

// const serveStatic= require('serve-static');

// const staticMiddleware =serveStatic('public'); 
// app.use(staticMiddleWare(); or use express.static (see below);

// app.use(express.static('public'));
// app.listen(4900, () =>{
//     console.log('listening on 4900');
// });



app.use('/webz', express.static('public'));
app.listen(4900, () =>{
    console.log('listening on 4900');
});