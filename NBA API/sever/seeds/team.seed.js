const mongoose = require('mongoose');
const Team = require("../app/api/models/team.models");

const dotenv = require('dotenv');
dotenv.config();

const team = [
    {
        name: 'Bulls',   
        city: 'Chicago',
        color: 'rojo y blanco'
      },
      {
        name: 'Lakers',   
        city: 'Los Angeles',
        color: 'amarillo y morado'
      },
      {
        name: 'Warriors',   
        city: 'San Francisco',
        color: 'azul y amarillo'
      },
      {
        name: 'Spurs',   
       city: 'San Antonio',
       color: 'negro y gris'
      },
      {
        name: 'Cavaliers',   
        city: 'Cleveland',
        color: 'marron y naranja'
      },
      {
        name: 'Celtics',   
        city: 'Boston',
        color: 'verde y blanco'
      },
      {
        name: 'D.Mavericks',   
        city: 'Texas',
       color: 'azul y blanco'
      },
      {
        name: 'Nets',   
        city: 'Brooklyn',
        color: 'negro y blanco'
    },
      {
        name: 'Knicks', 
       city: 'Nueva York',	
       color: 'azul y naranja'
      },

];
const teamDocuments = team.map(team => new Team(team));
mongoose
    .connect('mongodb+srv://root:12345@cluster0.nn0nv.mongodb.net/Team?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        const allTeam = await Team.find();
        if (allTeam.length) {
            await Team.collection.drop();
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
        await Team.insertMany(teamDocuments);
        console.log('DatabaseCreated')
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect());