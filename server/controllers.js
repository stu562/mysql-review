//get, post, delete msn
const model = require('../database/model.js');

//controlelr is the one that communicates with the database 
module.exports = {
    get: (req, res) => {
        const { listName } = req.query;
        //reference our model 
        model.Todo.findAll({
            where:{
                list_name: listName,
            }
        })//in sequelize it's PROMISE, do a then chain! to send 
        .then(todo => {
            if (todo) {
                res.status(200).send(todos)
            } else {
                res.status(404).end();
            }
        })
        .catch(err => res.status(404))
    },
    post: (req, res) => {
        //grabs the info 
       const {todo, listName} = req.body;
       //this is insert into  
       model.Todo.create({
           todo: todo,
           list_name: listName,
       })
       .then(() => {
           res.status(201).end();
       })
       .catch( err => {
           res.status(404).send(err)
       })
    },
    delete: (req, res) => {
        const { index } = req.query;
        model.Todo.destory({
            where: {id: index}
        })
        .then(() => {
            res.status(202).end()
        })
        .catch(err => {
            res.status(404).send(err);
        })
    }
}