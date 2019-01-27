const Sequelize = require('sequelize');
const connection = require('./index.js');

//define schemas here 
const todo = connection .define('todo', 
    {// names the schema
    todo:{
        type: Sequelize.STRING(50),
        allowNull: false //says hey always have something filled in 
        },
    list_name: {
        type: Sequelize.STRING(50),
        allowNull: false
        }
    }
);
connection.sync({force: false}); 
//will only add to our tables if they are already exists
//wont overwrite exisitng table
module.exports.Todo = Todo;
//modles needs to be connected to controllers 