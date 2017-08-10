#Postgres Excercises 

- select * from cd.name 
    select [some set of columns] from [some table or group of tables].

###How can you produce a list of facilities that charge a fee to members?
select * from cd.facilities where membercost>0;

###How can you produce a list of facilities that charge a fee to members, and that fee is less than 1/50th of the monthly maintenance cost? Return the facid, facility name, member cost, and monthly maintenance of the facilities in question.
select facid, name, membercost, monthlymaintenance
    from cd.facilities 
    where membercost > 0 and membercost < (0.02 * monthlymaintenance);

###How can you produce a list of all facilities with the word 'Tennis' in their name?
select *
	from cd.facilities 
	where 
		name like '%Tennis%'; 

###How can you retrieve the details of facilities with ID 1 and 5? Try to do it without using the OR operator.
select *
	from cd.facilities
		where 
			facid in (1,5);

###How can you produce a list of facilities, with each labelled as 'cheap' or 'expensive' depending on if their monthly maintenance cost is more than $100? Return the name and monthly maintenance of the facilities in question.
select name, 
	case when (monthlymaintenance > 100) then
		'expensive'
	else
		'cheap'
	end as cost
	from cd.facilities

###How can you produce a list of members who joined after the start of September 2012? Return the memid, surname, firstname, and joindate of the members in question.
select memid, surname, firstname, joindate 
	from cd.members
	where joindate >= '2012-09-01';

###How can you produce an ordered list of the first 10 surnames in the members table? The list must not contain duplicates.
    select distinct surname 
	from cd.members
order by surname
limit 10;  

###You, for some reason, want a combined list of all surnames and all facility names. Yes, this is a contrived example :-). Produce that list!

select surname 
	from cd.members
        union
        select name
	    from cd.facilities;  

###You'd like to get the signup date of your last member. How can you retrieve this information?

    SELECT max(joindate) as latest
	from cd.members;


###You'd like to get the first and last name of the last member(s) who signed up - not just the date. How can you do that?
    SELECT firstname, surname, joindate
	from cd.members
	where joindate = (select max(joindate) from cd.members);

############ in class notes 
**on terminal**
``` psql - connects to postgres
    \c excercises to open the excercise database 
    \dt cd.*  all the tables
```

###SELECT, alias
    select firstname as fname, surname as lname from cd.members; -- this changes the columns names 

###WHERE, exact
    select * from cd.members where memid = 1;

###WHERE IN, possible exact matches
    select * from cd.members where memid in(1,2,3);

###WHERE,exact -timestamps
    select * from cd.members where joindate = '2012-09-01';

###WHERE, comparisions
    select * from cd.members where joindate >= '2012-09-01';

###WHERE IN, possible exact mathces from subquery
    select *
        from cd.members
        where
        memid in (
            select memid from cd.members where joindate >= '2012-09-01'
        );
###WHERE, LIKE
    select *
        from cd.members 
        where
        surname like 'J%';

    select *
        from cd.members 
        where
        surname like '%';

        ilike?
###WHERE, boolean
    select *
    from cd.members
    where 
    surname like '%z%'
    or
    surname like '%Rambo';

    select *
    from cd.memebers
    where
    joindate >= '2012-09-01'
    and 
    surname like '%Rambo';

###ORDER BY
    select *
        from cd.members
        where
        joindate >= '2012-09-01'
    order by zipcode;

    select *
        from cd.members
        where
        joindate >= '2012-09-01'
    order by zipcode;
    asc;
- (can also use desc -- acessending and decending order)

###LIMIT
    select *
        from cd.members
        where 
        joindate >= '2012-09-01'
        LIMIT 10;

    select *
        from cd.members
        where joindate = (
            select max(joindate) from cd.members
        );

    
**find top 10 most recent joindate in decending order**
    select *
        from cd.members
        order by joindate
        desc
        LIMIT 10; 


###How can you produce a list of the start times for bookings by members named 'David Farrell'?
    select starttime
	from cd.bookings
	inner join cd.members 
		on cd.members.memid = cd.bookings.memid
	where
		cd.members.firstname='David'
		and cd.members.surname='Farrell';
**or you can do it this way**
    select bks.starttime
	from cd.bookings bks
	inner join cd.members mems 
		on mems.memid = bks.memid
	where
		mems.firstname='David'
		and mems.surname='Farrell';
###How can you produce a list of the start times for bookings for tennis courts, for the date '2012-09-21'? Return a list of start time and facility name pairings, ordered by the time.
    select bks.starttime as start, facs.name as name
	    from
	    	cd.facilities facs
	    	inner join cd.bookings bks
	    		on facs.facid = bks.facid
	    where
	    	facs.name like 'Tennis%' and
	    	bks.starttime >= '2012-09-21' and 
	    	bks.starttime < '2012-09-22' 
    order by bks.starttime;

### How can you output a list of all members who have recommended another member? Ensure that there are no duplicates in the list, and that results are ordered by (surname, firstname).
    select distinct recs.firstname as firstname, recs.surname as surname
	from
		cd.members mems
		inner join cd.members recs
			on recs.memid = mems.recommendedby
	order by surname, firstname

###How can you output a list of all members, including the individual who recommended them (if any)? Ensure that results are ordered by (surname, firstname).

select mems.firstname as memfname, mems.surname as memsname, recs.firstname as recfname, recs.surname as recsname
    from 
        cd.members mems
        left outer join cd.members recs
            on recs.memid = mems.recommendedby
    order by memsname, memfname;

###How can you produce a list of all members who have used a tennis court? Include in your output the name of the court, and the name of the member formatted as a single column. Ensure no duplicate data, and order by the member name.

select distinct mems.firstname || ' ' || mems.surname as member, facs.name as facility
	from
		cd.members mems
		inner join cd.bookings bks
			on mems.memid = bks.memid
		inner join cd.facilities facs
			on bks.facid = facs.facid
	where
		facs.name like 'Tennis%'
order by member

#const pg = require('pg-promise')();
###// Require and then immediatley call .pg is the result of that call. 

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

