Notes for quiz

Node modules
    package.json
    dependicies vs dev dependicies
        dev dependicies is where you load dependicies that save on the local server(for.eg tests mocha -w )This dont get saved on production
        dependicies are required on production 
    npm scripts to allow short cuts to npm calls
    npm install? 
    relative paths for your modules? (./adwda) or(../../dadw)two levels 
    modules.exports = allows class/functions to be used on other files where the other files have require() -- this doesnt work in the browser becuase this is specific to node
        modile.exports = (arg1, arg2) =>{
            do some stuff
        }
WebSockets
        what is AJAX polling? AJAX data wont come in order AKA no guarentees therefore you use WebSockets
        .on is how you listen on WebSockets
            .on is also used on eventlisteners in node
                how to trigger events? .emit
Basic creating and dropping DBs
        insert data
        select data
        inner join
Basic node
    this create new node app
    ^^^^^^^^^^^^^^^^^^
    const express =require('express');
    const webapp = express();

    webapp.get('/',(req, resp)=>{

    });
        req is all the info about the incoming request as a Object
    webapp.listen(5000, ()=>{
        webapp.listen(5000, ()=>{
            console.log("running on port 5000")
        })
    })

    running this on the terminal will allow your node server to on the link below node --inspect-brk index.js

    chrome://inspect/#devices

    open new tab and go to localhost:5000 will conosle.log ("running on port 5000" ) in the chrome dev tools 
# Friday Aug 11th

Express


###Dynamic route parameters


### Route hand

### routing helpers
CRUD!
    .get
    .post
    .put
    .delete

cost express = require('express');
const router = express.Router();

app.route('/somewhere') or router.route
    .get((req, res)=>{
        res.send('stuff);
    })
    .post((req, res)=>{
        res.send('stuff);
    })
    .put((req, res)=>{
        res.send('stuff);
    })
    .delete((req, res)=>{
        res.send('stuff);
    })

### Express middleware 

