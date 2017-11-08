
const redisMiddleware = (client) => class MiddleWare {
  static checkForList(req,res,next){
    console.log('Going through Redis');
    if(!client){
      next()
      return;
    }
    client.get(req.params.query,(err,results) =>{
      if(err){
        next();
        return;
      }
      else {
        if(results)
          res.json(JSON.parse(results));
        else {
          next()
          return;
        }

      }
    })
  }
  static checkForReport(req,res,next){
    console.log('Going through Redis');
    if(!client){
      next()
      return;
    }

    client.get(req.body.query+':'+req.body.type,(err,results) =>{
      if(err){
        next();
        return;
      }
      else {
        if(results)
          res.json(JSON.parse(results));
        else {
          next()
          return;
        }
      }
    })

  }
}

module.exports = redisMiddleware;
