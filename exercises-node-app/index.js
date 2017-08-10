const pg = require('pg-promise')();
// Require and then immediatley call .pg is the result of that call. 

// const dbConfig = 'postgrese://hamzahaseeb@localhost:5432/exercises';
const dbConfig = {
    host: 'localhost',
    port: 5432,
    database: 'exercises',
    user: 'chrisaquino'
    // password: 'user-password'
}
const db = pg(dbConfig);

function allFacilities(){
    db.query('select * from cd.facilities;');
}

allFacilities().then(
    (results) => {
        for (let r of results){ /* Note: It's of not in -- this returns the objects value */
            console.log(r.name);
       }
    }
);

function allRecommenders(){
    return db.query(`
        select distinct recs.firstname as firstname, recs.surname as surname
            from
                cd.members mems
                inner join cd.members recs
                    on recs.memid = mems.recommendedby
        order by surname, firstname;
    `);
}
// back ticks ` lets you put in line breaks. 
// back ticks also allows template strings
const catName = 'oakley';
let stringWithData = `My cat's name is ${catName}. Isn't he cool?`

function searchFacilitiesByName(name){
    return db.query(`select * from cd.facilities where name like '%${name}%'`);
}

// For queries that should only have a single result
function getMemberById(id){
    return db.one(`select * from cd.members where id = ${id};`);
}

// .none use this for creating tables,inserting,(and other things that don't return a result)
db.none(`insert into cd.facilities values(...);`)


// .results use this for showing SQL meta-info, not for data from the table
db.results(`insert into cd.facilites value(....);`)
    .then(console.log);

// Closing the connection 
pg.end(); // Disconnects from db server 


// VM notes
/* run all this in the terminal */
// sudo apt-get install postgreseql
// sudo apt-cache show postgreseql | less 
// sudo reboot
// sudo apt-get install postgresql
// uptime
// sudo su - 
//      become the super user
// su - postgres
// psql 
// \dl
// create role vagrant;
// alter role vagrant with superuser;
// alter role vagrant with createdb;
// alter role vagrant with login;
// \du
// \q
// exit
// exit (leave root)
// creatdb vagrant;
// psql  (your back in your postgres)


// install n (something like node)
// sudo apt-get build-essential
// sudo apt-get install git
// sudo apt-get install curl
// curl -L https://git.io/n-install | bash
// . ~/.bashrc
// n
// you are now noding!!


// express
const express = require('express');
const app = express();

app.get('/',(req, res) =>{
    res.send('Hello Word');
});

app.listen(3000,() => {
    console.log('web app is listening! on port 3000');
});


// scenario online shopping
