
Login = {};

Login.isValidPassword = function(data, callback){
    Login.db.account.find( {username: data.username, password: data.password} , function(err, res){
        if(res.length){
            callback(true);
        }
        else{
            callback(false);
        }
    });
}

Login.isUsernameTaken = function(data, callback){
    Login.db.account.find( {username: data.username}, function(err, res){
        if(res.length)
            callback(true);
        else
            callback(false);
    });
}

Login.addUser = function(data, callback){
    Login.db.account.insert( {username: data.username, password: data.password}, function(err){
        callback(); 
    });
}