const Sequelize = require('sequelize');

//create the connection
const connection = new Sequelize('todo_list', 'root', '' {
    host: 'localhost',
    dialect: 'mysql'
})

connection.connect
    .authenticate()
    .then(() => console.log('Sucess purely to see if we connected'))
    .catch(err => console.log('Error establishing connection to database', err))

module.exports = connection; //REMEMBER TO IMPORT IN THE INDEX.js, this connnects DB to server

//root: is user name
// followed by password 
// sequalize come with promises 