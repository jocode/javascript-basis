// Ejemplo de pirámide de la muerte o Callback Hell
function requestHandler(req, resp){
    User.findById(req.userId, function(error, user){
        if (err){
            resp.send(err)
        } else {
            Task.findById(user.tasksId, function(error, tasks){
                if(error){

                } else {
                    tasks.completed = true;
                    tasks.save(function(){
                        if (error){
                            return resp.send(err);
                        } else {
                            resp.send('Task completed');
                        }
                    })
                }
            })
        }
    });
}