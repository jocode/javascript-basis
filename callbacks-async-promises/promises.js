// Las promesas permiten evitar los Callback Hell
/*
Una promesa está formada por el método then y el método catch
- then: Cuando todo va bien
- catch: Cuando hay un error
*/
function requestHandler(req, res){
    User.findById(req.userId)
        .then(function(user){
            return Tasks.findById(user.taskId)
        })
        .then(function(tasks){
            tasks.completed = true;
            return tasks.save();
        })
        .then(function(){
            res.send("Task completed");
        })
        .catch(function(error){
            res.send(error);
        })
}