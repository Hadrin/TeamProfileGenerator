const fs = require('fs');

const initialHtml = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./style.css"/>
    <title>Team Members</title>
</head>

<body>
    <h1>Our Team:</h1>
    <div id="cardContainer">`;

class pageCreator{
    constructor(team){

        fs.writeFile('./dist/index.html', initialHtml, (err) => {
            if(err){
                console.log(err.message);
            }
        })

        for(var i = 0; i < team.length; i++){
            switch(team[i].getRole()){
                case "Manager":
                    managerCard(team[i]);
                    break;
                case "Engineer":
                    engineerCard(team[i]);
                    break;
                case "Intern":
                    internCard(team[i]);
                    break;
                default:
                    throw new Error("Bad getRole() encountered in pageCreator: " + team[i].getRole());
            }
        }

        finishPage();
    }
}

function managerCard(manager){
    fs.appendFile('./dist/index.html',     `<section class="card">
<h3>Manager</h3>
<hr>
<p>${manager.name}</p>
<p>ID: ${manager.employeeID}</p>
<p><a href="mailto:${manager.email}">${manager.email}</a></p>
<p>Office number: ${manager.office}</p>
</section>`, (err) => {
        if(err){
            console.log(err.message);
        }
    })
}

function engineerCard(engineer){
    fs.appendFile('./dist/index.html', `<section class="card">
<h3>Engineer</h3>
<hr>
<p>${engineer.name}</p>
<p>ID: ${engineer.employeeID}</p>
<p><a href="mailto:${engineer.email}">${engineer.email}</a></p>
<p>Github: <a href="www.github.com/${engineer.github}">${engineer.github}</a></p>
</section>`, (err) => {
        if(err){
            console.log(err.message);
        }
    })

}

function internCard(intern){
    fs.appendFile('./dist/index.html', `<section class="card">
<h3>Intern</h3>
<hr>
<p>${intern.name}</p>
<p>ID: ${intern.employeeID}</p>
<p><a href="mailto:${intern.email}">${intern.email}</a></p>
<p>School: ${intern.school}</p>
</section>`, (err) => {
        if(err){
            console.log(err.message);
        }
    })

}

function finishPage(){
    fs.appendFile('./dist/index.html', `
</div>
</body>`, (err) => {
            if(err){
                console.log(err.message);
            }
        });

        fs.writeFile('./dist/style.css', `body {
    background-image: linear-gradient(lightblue, white);
    background-repeat: no-repeat;
}

.card{
    width: 20%;
    border: 1px solid black;
    border-radius: 5px;
    filter: drop-shadow(5px 5px grey);
    background-color: beige;
    padding: 5px;
    margin: 5px;
    line-height: 0%;
    flex: 0 0 auto;
}

h1{
    text-align: center;
}

#cardContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}`, (err) => {
            if(err){
                console.log(err.message);
            }
        });
}

module.exports = pageCreator;